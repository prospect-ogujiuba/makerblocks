import React from "react";

const ApplicationForm = ({
	formData,
	handleInputChange,
	handleSave,
	isEditing,
	setIsEditing,
	isSaving,
	hasUnsavedChanges,
	setFormData,
	detailedEntry,
	setHasUnsavedChanges,
	FIELD_MAPPINGS,
	formatDate,
}) => {
	const hasValue = (fieldId) => {
		return formData[fieldId] && formData[fieldId] !== "";
	};

	const renderSkillBadges = (skills) => {
		return Object.entries(skills).map(([key, value]) => {
			if (hasValue(key)) {
				return (
					<span
						key={key}
						className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mr-1 mb-1"
					>
						{value}
					</span>
				);
			}
			return null;
		});
	};

	return (
		<form onSubmit={handleSave} className="space-y-6" noValidate>
			{/* Personal Information Section */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div className="space-y-4">
					<div className="bg-gray-50 p-4 rounded-lg">
						<h3 className="text-lg font-medium flex items-center mb-4">
							<i className="bi bi-person-fill me-2"></i>
							Personal Information
						</h3>
						<div className="space-y-3">
							<div>
								<label className="text-sm font-medium">Name</label>
								<div className="mt-1 flex gap-2">
									<input
										type="text"
										name="firstName"
										value={formData[FIELD_MAPPINGS.firstName] || ""}
										onChange={handleInputChange}
										className="block w-1/2 rounded-md border border-gray-300 px-3 py-2"
										placeholder="First Name"
									/>
									<input
										type="text"
										name="lastName"
										value={formData[FIELD_MAPPINGS.lastName] || ""}
										onChange={handleInputChange}
										className="block w-1/2 rounded-md border border-gray-300 px-3 py-2"
										placeholder="Last Name"
									/>
								</div>
							</div>
							<div>
								<label className="text-sm font-medium">
									<i className="bi bi-telephone-fill me-1"></i>
									Phone
								</label>
								<input
									type="tel"
									name="phone"
									value={formData[FIELD_MAPPINGS.phone] || ""}
									onChange={handleInputChange}
									className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
								/>
							</div>
							<div>
								<label className="text-sm font-medium">
									<i className="bi bi-envelope-fill me-1"></i>
									Email
								</label>
								<input
									type="email"
									name="email"
									value={formData[FIELD_MAPPINGS.email] || ""}
									onChange={handleInputChange}
									className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
								/>
							</div>
						</div>
					</div>
				</div>

				<div className="space-y-4">
					<div className="bg-gray-50 p-4 rounded-lg">
						<h3 className="text-lg font-medium flex items-center mb-4">
							<i className="bi bi-geo-alt-fill me-2"></i>
							Location
						</h3>
						<div className="space-y-3">
							<div>
								<label className="text-sm font-medium">City</label>
								<input
									type="text"
									name="city"
									value={formData[FIELD_MAPPINGS.city] || ""}
									onChange={handleInputChange}
									className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
								/>
							</div>
							<div>
								<label className="text-sm font-medium">Province</label>
								<input
									type="text"
									name="province"
									value={formData[FIELD_MAPPINGS.province] || ""}
									onChange={handleInputChange}
									className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Construction Trades Section */}
			<div className="bg-gray-50 p-4 rounded-lg">
				<h3 className="text-lg font-medium flex items-center mb-4">
					<i className="bi bi-tools me-2"></i>
					Construction Trades
				</h3>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
					{renderSkillBadges({
						[FIELD_MAPPINGS.constructionTrade]:
							formData[FIELD_MAPPINGS.constructionTrade],
						[FIELD_MAPPINGS.electrician]: formData[FIELD_MAPPINGS.electrician],
						[FIELD_MAPPINGS.plumbing]: formData[FIELD_MAPPINGS.plumbing],
						[FIELD_MAPPINGS.forklift]: formData[FIELD_MAPPINGS.forklift],
						[FIELD_MAPPINGS.welding]: formData[FIELD_MAPPINGS.welding],
						[FIELD_MAPPINGS.safetyCourses]:
							formData[FIELD_MAPPINGS.safetyCourses],
					})}
				</div>
			</div>

			{/* Hospitality Section */}
			<div className="bg-gray-50 p-4 rounded-lg">
				<h3 className="text-lg font-medium flex items-center mb-4">
					<i className="bi bi-house-door-fill me-2"></i>
					Hospitality
				</h3>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
					{renderSkillBadges({
						[FIELD_MAPPINGS.homeRenovation]:
							formData[FIELD_MAPPINGS.homeRenovation],
						[FIELD_MAPPINGS.culinary]: formData[FIELD_MAPPINGS.culinary],
						[FIELD_MAPPINGS.foodHandling]:
							formData[FIELD_MAPPINGS.foodHandling],
						[FIELD_MAPPINGS.bartending]: formData[FIELD_MAPPINGS.bartending],
						[FIELD_MAPPINGS.housekeeping]:
							formData[FIELD_MAPPINGS.housekeeping],
						[FIELD_MAPPINGS.leadership]: formData[FIELD_MAPPINGS.leadership],
					})}
				</div>
			</div>

			{/* Additional Information Section */}
			<div className="bg-gray-50 p-4 rounded-lg">
				<h3 className="text-lg font-medium flex items-center mb-4">
					<i className="bi bi-chat-right-text-fill me-2"></i>
					Additional Information
				</h3>
				<div className="space-y-4">
					<div>
						<label className="text-sm font-medium">Other Interests</label>
						<textarea
							name="otherInterests"
							value={formData[FIELD_MAPPINGS.otherInterests] || ""}
							onChange={handleInputChange}
							rows={3}
							className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
						/>
					</div>
					<div>
						<label className="text-sm font-medium">Volunteering Interest</label>
						<div className="mt-1">
							<span
								className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
									formData[FIELD_MAPPINGS.volunteer] === "Yes"
										? "bg-green-100 text-green-800"
										: "bg-gray-100 text-gray-800"
								}`}
							>
								<i
									className={`bi bi-${
										formData[FIELD_MAPPINGS.volunteer] === "Yes"
											? "hand-thumbs-up-fill"
											: "hand-thumbs-down"
									} me-1`}
								></i>
								{formData[FIELD_MAPPINGS.volunteer] || "No Response"}
							</span>
						</div>
					</div>
				</div>
			</div>

			{/* Metadata Section */}
			<div className="bg-gray-50 p-4 rounded-lg">
				<h3 className="text-lg font-medium flex items-center mb-4">
					<i className="bi bi-info-circle-fill me-2"></i>
					Submission Details
				</h3>
				<div className="grid grid-cols-2 gap-4 text-sm">
					<div>
						<span className="font-medium">Submission Date:</span>
						<div className="mt-1 text-gray-600">
							{formatDate(formData.date_created)}
						</div>
					</div>
					<div>
						<span className="font-medium">Last Updated:</span>
						<div className="mt-1 text-gray-600">
							{formatDate(formData.date_updated)}
						</div>
					</div>
					<div>
						<span className="font-medium">Status:</span>
						<div className="mt-1">
							<span
								className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
									formData.status === "active"
										? "bg-green-100 text-green-800"
										: "bg-gray-100 text-gray-800"
								}`}
							>
								<i
									className={`bi bi-${
										formData.status === "active" ? "check-circle" : "circle"
									} me-1`}
								></i>
								{formData.status}
							</span>
						</div>
					</div>
					<div>
						<span className="font-medium">Source URL:</span>
						<div className="mt-1 text-gray-600 truncate">
							{formData.source_url}
						</div>
					</div>
				</div>
			</div>

			{/* Action Buttons */}
			<div className="flex justify-end gap-4 pt-4 border-t">
				{isEditing ? (
					<>
						<button
							type="button"
							onClick={() => {
								setFormData(detailedEntry);
								setIsEditing(false);
								setHasUnsavedChanges(false);
							}}
							className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-800 disabled:opacity-50"
							disabled={isSaving}
						>
							<span className="mr-1">×</span>
							Cancel
						</button>
						<button
							type="submit"
							className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 disabled:opacity-50"
							disabled={isSaving || !hasUnsavedChanges}
						>
							{isSaving ? (
								<>
									<svg
										className="w-4 h-4 mr-1 animate-spin"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
									>
										<circle
											className="opacity-25"
											cx="12"
											cy="12"
											r="10"
											stroke="currentColor"
											strokeWidth="4"
										></circle>
										<path
											className="opacity-75"
											fill="currentColor"
											d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
										></path>
									</svg>
									Saving...
								</>
							) : (
								<>
									<span className="mr-1">✓</span>
									Save Changes
								</>
							)}
						</button>
					</>
				) : (
					<button
						type="button"
						onClick={() => setIsEditing(true)}
						className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700"
					>
						<span className="mr-1">✎</span>
						Edit
					</button>
				)}
			</div>
		</form>
	);
};

export default ApplicationForm;
