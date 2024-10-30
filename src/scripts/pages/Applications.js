import React, { useEffect, useState } from "react";
import ApplicationDialog from "../components/ApplicationDialog";
import ApplicationsTable from "../components/ApplicationsTable";

const Applications = () => {
	const [entries, setEntries] = useState([]);
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
	const [isLoading, setIsLoading] = useState(true);
	const [sortConfig, setSortConfig] = useState({
		key: "date_created",
		direction: "desc",
	});
	const [isModalOpen, setIsModalOpen] = useState(false);					
	const [selectedEntry, setSelectedEntry] = useState(null);
	const [detailedEntry, setDetailedEntry] = useState(null);
	const [isLoadingDetails, setIsLoadingDetails] = useState(false);
	const [isSaving, setIsSaving] = useState(false);

	const FIELD_MAPPINGS = {
		firstName: "3.3",
		lastName: "3.6",
		phone: "4",
		email: "5",
		city: "12.3",
		province: "12.4",
		constructionTrade: "14.1",
		electrician: "14.2",
		plumbing: "14.3",
		forklift: "14.4",
		welding: "14.5",
		safetyCourses: "14.6",
		homeRenovation: "17.1",
		culinary: "17.2",
		foodHandling: "17.3",
		bartending: "17.4",
		housekeeping: "17.5",
		leadership: "17.6",
		otherInterests: "16",
		volunteer: "21",
		dateCreated: "date_created",
		status: "status",
	};

	const fetchEntries = async (currentPage) => {
		setIsLoading(true);
		try {
			const response = await fetch(
				`http://compasscareerscanada.test/wp-json/gf/v2/forms/4/entries?_labels=1&sorting[direction]=DESC&paging[page_size]=1000&paging[current_page]=${currentPage}`,
			);

			if (!response.ok) throw new Error(response.status.toString());

			const data = await response.json();
			setEntries(data.entries);
			setTotalPages(Math.ceil(data.total_count / 1000));
		} catch (error) {
			console.error("Error fetching data:", error);
			if (error.message === "401") {
				alert("Unauthorized access. Please log in to view the data.");
			}
		} finally {
			setIsLoading(false);
		}
	};

	const fetchEntryDetails = async (entryId) => {
		setIsLoadingDetails(true);
		try {
			const response = await fetch(
				`http://compasscareerscanada.test/wp-json/gf/v2/entries/${entryId}?_labels=1`,
			);

			if (!response.ok) throw new Error(response.status.toString());

			const data = await response.json();
			setDetailedEntry(data);
		} catch (error) {
			console.error("Error fetching entry details:", error);
		} finally {
			setIsLoadingDetails(false);
		}
	};

	useEffect(() => {
		fetchEntries(page);
	}, [page]);

	const sortedEntries = React.useMemo(() => {
		return [...entries].sort((a, b) => {
			const aVal = a[sortConfig.key];
			const bVal = b[sortConfig.key];
			return sortConfig.direction === "asc"
				? aVal > bVal
					? 1
					: -1
				: aVal < bVal
				? 1
				: -1;
		});
	}, [entries, sortConfig]);

	const handleSort = (key) => {
		setSortConfig((prev) => ({
			key,
			direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
		}));
	};

	const handleEntryUpdate = async (updatedEntry) => {
		setIsSaving(true);
		setSaveStatus({ type: null, message: null });

		try {
			const response = await fetch(
				`http://compasscareerscanada.test/wp-json/gf/v2/entries/${selectedEntry.id}`,
				{
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(updatedEntry),
				},
			);

			if (!response.ok) {
				const errorData = await response.json().catch(() => null);
				throw new Error(errorData?.message || "Update failed");
			}

			// Get the updated entry data
			const updatedResponse = await fetch(
				`http://compasscareerscanada.test/wp-json/gf/v2/entries/${selectedEntry.id}?_labels=1`,
			);

			if (!updatedResponse.ok) {
				throw new Error("Failed to fetch updated entry");
			}

			const updatedEntryData = await updatedResponse.json();

			// Update both the entries list and the detailed entry
			setDetailedEntry(updatedEntryData);

			setSaveStatus({
				type: "success",
				message: "Entry updated successfully",
			});

			setIsEditing(false);

			setTimeout(() => {
				setSaveStatus({ type: null, message: null });
			}, 2000);
		} catch (error) {
			console.error("Error updating entry:", error);
			setSaveStatus({
				type: "error",
				message: error.message || "Failed to update entry. Please try again.",
			});
		} finally {
			setIsSaving(false);
			await fetchEntries(page);
		}
	};

	const formatDate = (dateString) => {
		return new Date(dateString).toLocaleString();
	};

	const handleOpenModal = (entry) => {
		setSelectedEntry(entry);
		setIsModalOpen(true);
		fetchEntryDetails(entry.id);
	};

	const handleRowClick = (entry) => {
		handleOpenModal(entry);
	};

	if (isLoading) {
		return (
			<div className="flex items-center justify-center p-8">
				<div className="flex items-center space-x-2">
					<i className="bi bi-arrow-clockwise animate-spin text-blue-600"></i>
					<span>Loading entries...</span>
				</div>
			</div>
		);
	}

	return (
		<>
			{isLoading ? (
				<div className="flex items-center justify-center p-8">
					<div className="flex items-center space-x-2">
						<i className="bi bi-arrow-clockwise animate-spin text-blue-600"></i>
						<span>Loading entries...</span>
					</div>
				</div>
			) : (
				<ApplicationsTable
					sortedEntries={sortedEntries}
					handleSort={handleSort}
					handleOpenModal={handleOpenModal}
					handleRowClick={handleRowClick}
					FIELD_MAPPINGS={FIELD_MAPPINGS}
					formatDate={formatDate}
					page={page}
					totalPages={totalPages}
					setPage={setPage}
					entries={entries}
				/>
			)}

			{isModalOpen && (
				<ApplicationDialog
					isOpen={isModalOpen}
					onClose={() => {
						setIsModalOpen(false);
						setSelectedEntry(null);
						setDetailedEntry(null);
					}}
					selectedEntry={selectedEntry}
					detailedEntry={detailedEntry}
					isLoadingDetails={isLoadingDetails}
					handleEntryUpdate={handleEntryUpdate}
					isSaving={isSaving}
					FIELD_MAPPINGS={FIELD_MAPPINGS}
					formatDate={formatDate}
				/>
			)}
		</>
	);
};

export default Applications;
