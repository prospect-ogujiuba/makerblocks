import React from "react";

const ApplicationsTable = ({
	sortedEntries,
	handleSort,
	handleOpenModal,
	handleRowClick,
	FIELD_MAPPINGS,
	formatDate,
	page,
	totalPages,
	setPage,
	entries,
}) => {
	return (
		<div className="py-4">
			<div className="overflow-x-auto rounded-lg border border-gray-200">
				<table className="min-w-full divide-y divide-gray-200">
					<thead className="bg-gray-50">
						<tr>
							<th
								onClick={() => handleSort(FIELD_MAPPINGS.dateCreated)}
								className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
							>
								<div className="flex items-center">
									<i className="bi bi-calendar-event me-1"></i>
									Date
								</div>
							</th>
							<th
								onClick={() => handleSort(FIELD_MAPPINGS.firstName)}
								className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
							>
								<div className="flex items-center">
									<i className="bi bi-person me-1"></i>
									Name
								</div>
							</th>
							<th
								onClick={() => handleSort(FIELD_MAPPINGS.email)}
								className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
							>
								<div className="flex items-center">
									<i className="bi bi-envelope me-1"></i>
									Contact
								</div>
							</th>
							<th
								onClick={() => handleSort(FIELD_MAPPINGS.city)}
								className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
							>
								<div className="flex items-center">
									<i className="bi bi-geo-alt me-1"></i>
									Location
								</div>
							</th>
							<th
								onClick={() => handleSort(FIELD_MAPPINGS.constructionTrade)}
								className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
							>
								<div className="flex items-center">
									<i className="bi bi-tools me-1"></i>
									Skills
								</div>
							</th>
							<th
								onClick={() => handleSort(FIELD_MAPPINGS.status)}
								className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
							>
								<div className="flex items-center">
									<i className="bi bi-check-circle me-1"></i>
									Status
								</div>
							</th>
							<th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
								Actions
							</th>
						</tr>
					</thead>
					<tbody className="bg-white divide-y divide-gray-200">
						{sortedEntries.map((entry) => (
							<tr
								key={entry.id}
								onClick={() => handleRowClick(entry)}
								className="hover:bg-gray-50 cursor-pointer"
							>
								<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
									<div className="flex flex-col">
										<span>{formatDate(entry.date_created).split(",")[0]}</span>
										<span className="text-xs text-gray-400">
											{formatDate(entry.date_created).split(",")[1]}
										</span>
									</div>
								</td>
								<td className="px-6 py-4 whitespace-nowrap">
									<div className="flex items-center">
										<div className="flex-shrink-0 h-8 w-8 bg-gray-100 rounded-full flex items-center justify-center">
											<i className="bi bi-person-circle text-gray-500"></i>
										</div>
										<div className="ml-4">
											<div className="text-sm font-medium text-gray-900">
												{entry[FIELD_MAPPINGS.firstName]}{" "}
												{entry[FIELD_MAPPINGS.lastName]}
											</div>
											{entry[FIELD_MAPPINGS.volunteer] === "Yes" && (
												<span className="text-xs text-green-600 flex items-center mt-1">
													<i className="bi bi-hand-thumbs-up-fill me-1"></i>
													Volunteer
												</span>
											)}
										</div>
									</div>
								</td>
								<td className="px-6 py-4 whitespace-nowrap">
									<div className="text-sm text-gray-900">
										<div className="flex items-center">
											<i className="bi bi-envelope me-1"></i>
											{entry[FIELD_MAPPINGS.email]}
										</div>
										<div className="flex items-center text-gray-500 mt-1">
											<i className="bi bi-telephone me-1"></i>
											{entry[FIELD_MAPPINGS.phone]}
										</div>
									</div>
								</td>
								<td className="px-6 py-4 whitespace-nowrap">
									<div className="text-sm text-gray-900 flex items-center">
										<i className="bi bi-geo-alt me-1"></i>
										{entry[FIELD_MAPPINGS.city]},{" "}
										{entry[FIELD_MAPPINGS.province]}
									</div>
								</td>
								<td className="px-6 py-4">
									<div className="text-sm text-gray-900">
										{entry[FIELD_MAPPINGS.constructionTrade] && (
											<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mr-1 mb-1">
												<i className="bi bi-building me-1"></i>
												{entry[FIELD_MAPPINGS.constructionTrade]}
											</span>
										)}
										{entry[FIELD_MAPPINGS.safetyCourses] && (
											<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mr-1 mb-1">
												<i className="bi bi-shield-check me-1"></i>
												{entry[FIELD_MAPPINGS.safetyCourses]}
											</span>
										)}
									</div>
								</td>
								<td className="px-6 py-4 whitespace-nowrap">
									<span
										className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
											entry.status === "active"
												? "bg-green-100 text-green-800"
												: "bg-gray-100 text-gray-800"
										}`}
									>
										<i
											className={`bi bi-${
												entry.status === "active" ? "check-circle" : "circle"
											} me-1`}
										></i>
										{entry.status}
									</span>
								</td>
								<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
									<button
										onClick={(e) => {
											e.stopPropagation();
											handleOpenModal(entry);
										}}
										className="text-blue-600 hover:text-blue-900 flex items-center justify-end"
									>
										<i className="bi bi-pencil-square me-1"></i>
										Edit
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			<div className="flex justify-between items-center mt-4">
				<button
					onClick={() => setPage((p) => Math.max(1, p - 1))}
					disabled={page === 1}
					className="px-4 py-2 border rounded-md bg-black text-white disabled:opacity-50 disabled:bg-stone-400 disabled:text-gray-600 flex items-center"
				>
					<i className="bi bi-chevron-left me-1"></i>
					Previous
				</button>
				<div className="flex items-center space-x-2">
					<span className="text-sm text-gray-700">
						Page {page} of {totalPages}
					</span>
					<span className="text-sm text-gray-400">
						({entries.length} entries)
					</span>
				</div>
				<button
					onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
					disabled={page === totalPages}
					className="px-4 py-2 border rounded-md bg-black text-white disabled:opacity-50 disabled:bg-stone-400 disabled:text-gray-600 flex items-center"
				>
					Next
					<i className="bi bi-chevron-right ms-1"></i>
				</button>
			</div>
		</div>
	);
};

export default ApplicationsTable;
