import React, { useEffect, useState } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import ApplicationForm from "./ApplicationForm";

const Alert = ({ children, className }) => (
	<div className={`p-4 rounded-lg border ${className}`} role="alert">
		{children}
	</div>
);

const AlertDescription = ({ children, className }) => (
	<div className={`text-sm ${className}`}>{children}</div>
);

const ApplicationDialog = ({
	isOpen,
	onClose,
	selectedEntry,
	detailedEntry,
	isLoadingDetails,
	handleEntryUpdate,
	isSaving,
	FIELD_MAPPINGS,
	formatDate,
}) => {
	const [formData, setFormData] = useState(selectedEntry || {});
	const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
	const [isEditing, setIsEditing] = useState(false);
	const [saveStatus, setSaveStatus] = useState({ type: null, message: null });

	useEffect(() => {
		if (detailedEntry) {
			setFormData(detailedEntry);
		}
	}, [detailedEntry]);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[FIELD_MAPPINGS[name] || name]: value,
		}));
		setIsEditing(true);
		setHasUnsavedChanges(true);
	};

	const handleSave = async (e) => {
		e.preventDefault();

		if (!hasUnsavedChanges || isSaving) {
			return;
		}

		try {
			await handleEntryUpdate(formData);
			setHasUnsavedChanges(false);
			setSaveStatus({
				type: "success",
				message: "Entry updated successfully",
			});
			setIsEditing(false);

			setTimeout(() => {
				setSaveStatus({ type: null, message: null });
			}, 2000);
		} catch (error) {
			setSaveStatus({
				type: "error",
				message: error.message || "Failed to update entry. Please try again.",
			});
		}
	};

	const handleClose = () => {
		if (saveStatus.type === "success") {
			closeModal();
			return;
		}

		if (hasUnsavedChanges && isEditing) {
			if (
				window.confirm(
					"You have unsaved changes. Are you sure you want to close?",
				)
			) {
				closeModal();
			}
		} else {
			closeModal();
		}
	};

	const closeModal = () => {
		onClose();
		setIsEditing(false);
		setSaveStatus({ type: null, message: null });
	};

	return (
		<Dialog open={isOpen} onClose={handleClose} className="relative z-50">
			<div className="fixed inset-0 bg-black/30" aria-hidden="true" />

			<div className="fixed inset-0 flex items-center justify-center p-4">
				<DialogPanel className="mx-auto max-w-4xl rounded bg-white p-8 w-full max-h-[90vh] overflow-y-auto">
					{isLoadingDetails ? (
						<div className="flex items-center justify-center p-8">
							<div className="flex flex-col items-center gap-2">
								<i className="bi bi-arrow-clockwise animate-spin text-blue-600 text-2xl"></i>
								<span className="text-sm text-gray-600">
									Loading entry details...
								</span>
							</div>
						</div>
					) : (
						<>
							<div className="flex justify-between items-center mb-6">
								<DialogTitle className="text-xl font-medium flex items-center">
									<i className="bi bi-person-vcard-fill me-2"></i>
									Application Details
								</DialogTitle>
								<div className="flex items-center gap-2">
									<span className="text-sm text-gray-500">
										Submission ID: {formData.id}
									</span>
									<button
										onClick={handleClose}
										className="text-white p-2 bg-red-500 rounded-md hover:bg-red-800 transition-colors"
										disabled={isSaving}
									>
										<i className="bi bi-x-lg"></i>
									</button>
								</div>
							</div>

							{saveStatus.type && (
								<Alert
									className={`mb-4 ${
										saveStatus.type === "success"
											? "bg-green-50 border-green-200"
											: "bg-red-50 border-red-200"
									}`}
								>
									<AlertDescription className="flex items-center">
										{saveStatus.type === "success" ? (
											<svg
												className="w-4 h-4 mr-2 text-green-500"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path
													fillRule="evenodd"
													d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
													clipRule="evenodd"
												/>
											</svg>
										) : (
											<svg
												className="w-4 h-4 mr-2 text-red-500"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path
													fillRule="evenodd"
													d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
													clipRule="evenodd"
												/>
											</svg>
										)}
										{saveStatus.message}
									</AlertDescription>
								</Alert>
							)}

							<ApplicationForm
								formData={formData}
								handleInputChange={handleInputChange}
								handleSave={handleSave}
								isEditing={isEditing}
								setIsEditing={setIsEditing}
								isSaving={isSaving}
								hasUnsavedChanges={hasUnsavedChanges}
								setFormData={setFormData}
								detailedEntry={detailedEntry}
								setHasUnsavedChanges={setHasUnsavedChanges}
								FIELD_MAPPINGS={FIELD_MAPPINGS}
								formatDate={formatDate}
							/>
						</>
					)}
				</DialogPanel>
			</div>
		</Dialog>
	);
};

export default ApplicationDialog;
