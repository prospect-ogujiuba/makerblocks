import React, { useState, useEffect, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

const ApplicantsCRUD = () => {
	const [applicants, setApplicants] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isOpen, setIsOpen] = useState(false);
	const [isEditing, setIsEditing] = useState(false);
	const [currentApplicant, setCurrentApplicant] = useState(null);

	const API_URL = "/wp-json/atsflow/v1/applicants";

	useEffect(() => {
		fetchApplicants();
	}, []);

	const fetchApplicants = async () => {
		try {
			const response = await fetch(API_URL, {
				headers: {
					"X-WP-Nonce": wpApiSettings.nonce,
				},
			});
			const data = await response.json();
			setApplicants(data);
			setIsLoading(false);
		} catch (error) {
			console.error("Error fetching applicants:", error);
			setIsLoading(false);
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const applicantData = Object.fromEntries(formData.entries());

		// Convert checkbox values
		["session_attended", "resume", "enrolled"].forEach((field) => {
			applicantData[field] = formData.get(field) ? 1 : 0;
		});

		try {
			const url = isEditing ? `${API_URL}/${currentApplicant.id}` : API_URL;
			const method = isEditing ? "PUT" : "POST";

			const response = await fetch(url, {
				method,
				headers: {
					"Content-Type": "application/json",
					"X-WP-Nonce": wpApiSettings.nonce,
				},
				body: JSON.stringify(applicantData),
			});

			if (response.ok) {
				fetchApplicants();
				setIsOpen(false);
				setCurrentApplicant(null);
				setIsEditing(false);
			}
		} catch (error) {
			console.error("Error saving applicant:", error);
		}
	};

	const handleDelete = async (id) => {
		if (window.confirm("Are you sure you want to delete this applicant?")) {
			try {
				const response = await fetch(`${API_URL}/${id}`, {
					method: "DELETE",
					headers: {
						"X-WP-Nonce": wpApiSettings.nonce,
					},
				});

				if (response.ok) {
					fetchApplicants();
				}
			} catch (error) {
				console.error("Error deleting applicant:", error);
			}
		}
	};

	const handleEdit = (applicant) => {
		setCurrentApplicant(applicant);
		setIsEditing(true);
		setIsOpen(true);
	};

	return (
		<div className="p-4">
			<div className="flex justify-between items-center mb-6">
				<h1 className="text-2xl font-bold">Applicants Management</h1>
				<button
					onClick={() => {
						setIsEditing(false);
						setCurrentApplicant(null);
						setIsOpen(true);
					}}
					className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
				>
					Add New Applicant
				</button>
			</div>

			{isLoading ? (
				<div className="text-center py-4">Loading...</div>
			) : (
				<div className="overflow-x-auto">
					<table className="min-w-full divide-y divide-gray-200">
						<thead className="bg-gray-50">
							<tr>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
									Name
								</th>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
									Email
								</th>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
									Phone
								</th>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
									Status
								</th>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
									Actions
								</th>
							</tr>
						</thead>
						<tbody className="bg-white divide-y divide-gray-200">
							{applicants.map((applicant) => (
								<tr key={applicant.id}>
									<td className="px-6 py-4 whitespace-nowrap">
										{`${applicant.firstname} ${applicant.lastname}`}
									</td>
									<td className="px-6 py-4 whitespace-nowrap">
										{applicant.email}
									</td>
									<td className="px-6 py-4 whitespace-nowrap">
										{applicant.phone}
									</td>
									<td className="px-6 py-4 whitespace-nowrap">
										{applicant.status}
									</td>
									<td className="px-6 py-4 whitespace-nowrap">
										<button
											onClick={() => handleEdit(applicant)}
											className="text-blue-600 hover:text-blue-900 mr-4"
										>
											Edit
										</button>
										<button
											onClick={() => handleDelete(applicant.id)}
											className="text-red-600 hover:text-red-900"
										>
											Delete
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			)}

			<Transition appear show={isOpen} as={Fragment}>
				<Dialog
					as="div"
					className="fixed inset-0 z-10 overflow-y-auto"
					onClose={() => setIsOpen(false)}
				>
					<div className="min-h-screen px-4 text-center">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
						</Transition.Child>

						<span
							className="inline-block h-screen align-middle"
							aria-hidden="true"
						>
							&#8203;
						</span>

						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95"
						>
							<div className="inline-block w-full max-w-2xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-lg">
								<Dialog.Title
									as="h3"
									className="text-lg font-medium leading-6 text-gray-900 mb-4"
								>
									{isEditing ? "Edit Applicant" : "Add New Applicant"}
								</Dialog.Title>

								<form onSubmit={handleSubmit} className="space-y-4">
									<div className="grid grid-cols-2 gap-4">
										<div>
											<label className="block text-sm font-medium text-gray-700 mb-1">
												First Name
											</label>
											<input
												type="text"
												name="firstname"
												defaultValue={currentApplicant?.firstname || ""}
												className="w-full border border-gray-300 rounded-md px-3 py-2"
												required
											/>
										</div>
										<div>
											<label className="block text-sm font-medium text-gray-700 mb-1">
												Last Name
											</label>
											<input
												type="text"
												name="lastname"
												defaultValue={currentApplicant?.lastname || ""}
												className="w-full border border-gray-300 rounded-md px-3 py-2"
												required
											/>
										</div>
										<div>
											<label className="block text-sm font-medium text-gray-700 mb-1">
												Email
											</label>
											<input
												type="email"
												name="email"
												defaultValue={currentApplicant?.email || ""}
												className="w-full border border-gray-300 rounded-md px-3 py-2"
												required
											/>
										</div>
										<div>
											<label className="block text-sm font-medium text-gray-700 mb-1">
												Phone
											</label>
											<input
												type="tel"
												name="phone"
												defaultValue={currentApplicant?.phone || ""}
												className="w-full border border-gray-300 rounded-md px-3 py-2"
												required
											/>
										</div>
										<div className="col-span-2">
											<label className="block text-sm font-medium text-gray-700 mb-1">
												Status
											</label>
											<select
												name="status"
												defaultValue={currentApplicant?.status || "1"}
												className="w-full border border-gray-300 rounded-md px-3 py-2"
											>
												<option value="1">New</option>
												<option value="2">In Progress</option>
												<option value="3">Completed</option>
											</select>
										</div>
									</div>

									<div className="mt-4 space-x-4">
										<button
											type="submit"
											className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
										>
											{isEditing ? "Update" : "Create"} Applicant
										</button>
										<button
											type="button"
											onClick={() => setIsOpen(false)}
											className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
										>
											Cancel
										</button>
									</div>
								</form>
							</div>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition>
		</div>
	);
};

export default ApplicantsCRUD;
