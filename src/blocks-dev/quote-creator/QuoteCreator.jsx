import React, { useState, useEffect } from "react";
import {
	Dialog,
	DialogBackdrop,
	DialogPanel,
	DialogTitle,
	Label,
	Listbox,
	ListboxButton,
	ListboxOption,
	ListboxOptions,
} from "@headlessui/react";
import {
	PlusIcon,
	XMarkIcon,
	CalculatorIcon,
	DocumentTextIcon,
	PhoneIcon,
	CameraIcon,
	KeyIcon,
	WifiIcon,
	CogIcon,
	ComputerDesktopIcon,
} from "@heroicons/react/24/outline";
import { ChevronUpDownIcon } from "@heroicons/react/16/solid";
import { CheckIcon } from "@heroicons/react/20/solid";

// Icon mapping for services
const iconMap = {
	phone: PhoneIcon,
	camera: CameraIcon,
	key: KeyIcon,
	wifi: WifiIcon,
	gear: CogIcon,
	laptop: ComputerDesktopIcon,
};

// Dynamic service configurations based on service codes
const getServiceConfiguration = (serviceCode, basePrice) => {
	const configurations = {
		voip_phone_system: {
			fields: [
				{
					name: "users",
					label: "Number of Users",
					type: "number",
					min: 1,
					max: 500,
					multiplier: 25,
					required: true,
				},
				{
					name: "features",
					label: "Feature Package",
					type: "select",
					options: [
						{ value: "basic", label: "Basic (Calling, Voicemail)", price: 0 },
						{
							value: "standard",
							label: "Standard (+ Call Forwarding, Conference)",
							price: 50,
						},
						{
							value: "premium",
							label: "Premium (+ Analytics, CRM Integration)",
							price: 150,
						},
					],
					required: true,
				},
				{
					name: "installation",
					label: "Installation Type",
					type: "radio",
					options: [
						{ value: "remote", label: "Remote Setup", price: 0 },
						{ value: "onsite", label: "On-site Installation", price: 200 },
					],
					required: true,
				},
			],
		},
		camera_system: {
			fields: [
				{
					name: "cameras",
					label: "Number of Cameras",
					type: "number",
					min: 1,
					max: 50,
					multiplier: 150,
					required: true,
				},
				{
					name: "quality",
					label: "Camera Quality",
					type: "select",
					options: [
						{ value: "1080p", label: "1080p HD", price: 0 },
						{ value: "4k", label: "4K Ultra HD", price: 100 },
					],
					required: true,
				},
				{
					name: "storage",
					label: "Storage Solution",
					type: "select",
					options: [
						{ value: "local", label: "Local NVR (30 days)", price: 200 },
						{ value: "cloud", label: "Cloud Storage (90 days)", price: 50 },
					],
					required: true,
				},
			],
		},
		access_control: {
			fields: [
				{
					name: "doors",
					label: "Number of Doors",
					type: "number",
					min: 1,
					max: 20,
					multiplier: 200,
					required: true,
				},
				{
					name: "cardType",
					label: "Access Card Type",
					type: "select",
					options: [
						{ value: "proximity", label: "Proximity Cards", price: 0 },
						{ value: "smart", label: "Smart Cards", price: 50 },
					],
					required: true,
				},
				{
					name: "users",
					label: "Number of Users",
					type: "number",
					min: 1,
					max: 500,
					multiplier: 5,
					required: true,
				},
			],
		},
		network_cabling: {
			fields: [
				{
					name: "sqft",
					label: "Square Footage",
					type: "number",
					min: 100,
					max: 50000,
					multiplier: 2,
					required: true,
				},
				{
					name: "cableType",
					label: "Cable Type",
					type: "select",
					options: [
						{ value: "cat6", label: "Cat6 Standard", price: 0 },
						{ value: "cat6a", label: "Cat6a Enhanced", price: 0.5 },
						{ value: "fiber", label: "Fiber Optic", price: 2 },
					],
					required: true,
				},
				{
					name: "drops",
					label: "Number of Network Drops",
					type: "number",
					min: 1,
					max: 100,
					multiplier: 50,
					required: true,
				},
			],
		},
		managed_services: {
			fields: [
				{
					name: "devices",
					label: "Number of Devices",
					type: "number",
					min: 1,
					max: 200,
					multiplier: 15,
					required: true,
				},
				{
					name: "serviceLevel",
					label: "Service Level",
					type: "select",
					options: [
						{ value: "basic", label: "Basic Monitoring", price: 0 },
						{
							value: "standard",
							label: "Standard Support (Business Hours)",
							price: 25,
						},
						{ value: "premium", label: "Premium 24/7 Support", price: 75 },
					],
					required: true,
				},
			],
		},
		it_consulting: {
			fields: [
				{
					name: "hours",
					label: "Estimated Hours",
					type: "number",
					min: 1,
					max: 200,
					multiplier: 1,
					required: true,
				},
				{
					name: "consultingType",
					label: "Consulting Type",
					type: "select",
					options: [
						{ value: "assessment", label: "IT Assessment", price: 0 },
						{ value: "strategy", label: "Strategic Planning", price: 25 },
						{ value: "implementation", label: "Implementation Support", price: 50 },
					],
					required: true,
				},
			],
		},
	};

	// Return configuration with dynamic base price
	const config = configurations[serviceCode];
	if (config) {
		return {
			...config,
			basePrice: parseFloat(basePrice) || 0,
		};
	}

	// Default configuration for unknown service types
	return {
		basePrice: parseFloat(basePrice) || 0,
		fields: [
			{
				name: "quantity",
				label: "Quantity",
				type: "number",
				min: 1,
				max: 100,
				multiplier: 1,
				required: true,
			},
		],
	};
};

function QuoteModal({ open, setOpen, services }) {
	const [lineItems, setLineItems] = useState([]);
	const [currentService, setCurrentService] = useState({
		serviceId: "",
		config: {},
	});
	const [showAddForm, setShowAddForm] = useState(false);
	const [customerInfo, setCustomerInfo] = useState({
		company: "",
		name: "",
		email: "",
		phone: "",
	});
	const [step, setStep] = useState("building"); // 'building' or 'quote'

	const subtotal = lineItems.reduce((sum, item) => sum + item.total, 0);
	const tax = Math.round(subtotal * 0.13); // 13% HST
	const total = subtotal + tax;

	// Generate line item description and calculate total
	const generateLineItem = (serviceId, config) => {
		const service = services.find(s => s.id === serviceId);
		if (!service) return null;

		const serviceConfig = getServiceConfiguration(service.code, service.basePrice);
		let price = serviceConfig.basePrice;
		let quantity = 1;
		let description = service.name;
		let details = [];

		serviceConfig.fields.forEach((field) => {
			const value = config[field.name];

			if (field.type === "number" && field.multiplier && value) {
				if (
					field.name === "users" ||
					field.name === "cameras" ||
					field.name === "doors" ||
					field.name === "devices" ||
					field.name === "hours"
				) {
					quantity = value;
					price += field.multiplier;
				} else {
					price += value * field.multiplier;
					details.push(`${field.label}: ${value.toLocaleString()}`);
				}
			} else if (field.type === "select" && value) {
				const option = field.options.find((opt) => opt.value === value);
				if (option) {
					price += option.price;
					details.push(option.label);
				}
			} else if (field.type === "radio" && value) {
				const option = field.options.find((opt) => opt.value === value);
				if (option) {
					price += option.price;
					details.push(option.label);
				}
			}
		});

		if (details.length > 0) {
			description += ` - ${details.join(", ")}`;
		}

		return {
			id: Date.now(),
			description,
			quantity,
			unitPrice: price,
			total: quantity * price,
			serviceId,
			config,
		};
	};

	const addLineItem = () => {
		const lineItem = generateLineItem(
			currentService.serviceId,
			currentService.config,
		);
		if (lineItem) {
			setLineItems((prev) => [...prev, lineItem]);
			setCurrentService({ serviceId: "", config: {} });
			setShowAddForm(false);
		}
	};

	const removeLineItem = (id) => {
		setLineItems((prev) => prev.filter((item) => item.id !== id));
	};

	const generateQuote = () => {
		if (!customerInfo.name || !customerInfo.email || lineItems.length === 0) {
			alert("Please fill in contact information and add at least one service");
			return;
		}
		setStep("quote");
	};

	const renderField = (field, value, onChange) => {
		const fieldId = `field-${field.name}`;

		switch (field.type) {
			case "number":
				return (
					<div key={field.name} className="space-y-1">
						<label
							htmlFor={fieldId}
							className="block text-sm font-medium text-gray-700"
						>
							{field.label}{" "}
							{field.required && <span className="text-red-500">*</span>}
						</label>
						<input
							id={fieldId}
							type="number"
							min={field.min}
							max={field.max}
							value={value || ""}
							onChange={(e) =>
								onChange(field.name, parseInt(e.target.value) || 0)
							}
							className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
							required={field.required}
						/>
					</div>
				);

			case "select":
				return (
					<div key={field.name} className="space-y-1">
						<label
							htmlFor={fieldId}
							className="block text-sm font-medium text-gray-700"
						>
							{field.label}{" "}
							{field.required && <span className="text-red-500">*</span>}
						</label>
						<select
							id={fieldId}
							value={value || ""}
							onChange={(e) => onChange(field.name, e.target.value)}
							className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
							required={field.required}
						>
							<option value="">Select an option</option>
							{field.options.map((option) => (
								<option key={option.value} value={option.value}>
									{option.label} {option.price > 0 && `(+$${option.price})`}
								</option>
							))}
						</select>
					</div>
				);

			case "radio":
				return (
					<fieldset key={field.name} className="space-y-1">
						<legend className="block text-sm font-medium text-gray-700">
							{field.label}{" "}
							{field.required && <span className="text-red-500">*</span>}
						</legend>
						<div className="space-y-2">
							{field.options.map((option) => (
								<div key={option.value} className="flex items-center">
									<input
										id={`${fieldId}-${option.value}`}
										type="radio"
										name={fieldId}
										value={option.value}
										checked={value === option.value}
										onChange={(e) => onChange(field.name, e.target.value)}
										className="size-4 border-gray-300 text-blue-600 focus:ring-blue-600"
										required={field.required}
									/>
									<label
										htmlFor={`${fieldId}-${option.value}`}
										className="ml-3 block text-sm font-medium text-gray-900"
									>
										{option.label} {option.price > 0 && `(+$${option.price})`}
									</label>
								</div>
							))}
						</div>
					</fieldset>
				);

			default:
				return null;
		}
	};

	const selectedService = services.find(s => s.id === currentService.serviceId);
	const selectedServiceConfig = selectedService ? getServiceConfiguration(selectedService.code, selectedService.basePrice) : null;

	if (step === "quote") {
		return (
			<Dialog
				open={open}
				onClose={setOpen}
				className="relative z-50 col-span-2"
			>
				<DialogBackdrop
					transition
					className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
				/>
				<div className="fixed inset-0 p-4 z-10 w-screen overflow-y-auto">
					<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
						<DialogPanel
							transition
							className="relative transform w-full overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
						>
							<div className="bg-white overflow-scroll px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
								<div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
									<button
										type="button"
										onClick={() => setOpen(false)}
										className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
									>
										<span className="sr-only">Close</span>
										<XMarkIcon aria-hidden="true" className="size-6" />
									</button>
								</div>

								{/* Header */}
								<div className="flex justify-between items-center mb-6 border-b pb-4">
									<DialogTitle
										as="h2"
										className="text-2xl font-bold text-gray-900"
									>
										Service Quote
									</DialogTitle>
									<button
										onClick={() => setStep("building")}
										className="text-blue-600 hover:text-blue-700 font-medium"
									>
										← Edit Quote
									</button>
								</div>

								{/* Company Info */}
								<div className="grid grid-cols-2 gap-8 mb-8">
									<div>
										<h3 className="font-semibold text-gray-900 mb-2">
											B2B CNC
										</h3>
										<p className="text-sm text-gray-600">
											Computer, Networking & Communication Services
											<br />
											Email: info@b2bcnc.com
											<br />
											Phone: (555) 123-4567
										</p>
									</div>
									<div>
										<h3 className="font-semibold text-gray-900 mb-2">
											Bill To:
										</h3>
										<p className="text-sm text-gray-600">
											{customerInfo.company}
											<br />
											{customerInfo.name}
											<br />
											{customerInfo.email}
											<br />
											{customerInfo.phone}
										</p>
									</div>
								</div>

								{/* Line Items Table */}
								<div className="mb-8">
									<div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
										<table className="min-w-full divide-y divide-gray-300">
											<thead className="bg-gray-50">
												<tr>
													<th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
														Description
													</th>
													<th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wide text-gray-500">
														Qty
													</th>
													<th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wide text-gray-500">
														Unit Price
													</th>
													<th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wide text-gray-500">
														Total
													</th>
												</tr>
											</thead>
											<tbody className="divide-y divide-gray-200 bg-white">
												{lineItems.map((item) => (
													<tr key={item.id}>
														<td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
															{item.description}
														</td>
														<td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 text-center">
															{item.quantity}
														</td>
														<td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 text-right">
															${item.unitPrice.toLocaleString()}
														</td>
														<td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 text-right">
															${item.total.toLocaleString()}
														</td>
													</tr>
												))}
											</tbody>
										</table>
									</div>
								</div>

								{/* Totals */}
								<div className="flex justify-end mb-8">
									<div className="w-64 space-y-2">
										<div className="flex justify-between py-2 border-b border-gray-200">
											<span className="text-sm text-gray-600">Subtotal:</span>
											<span className="text-sm font-medium">
												${subtotal.toLocaleString()}
											</span>
										</div>
										<div className="flex justify-between py-2 border-b border-gray-200">
											<span className="text-sm text-gray-600">HST (13%):</span>
											<span className="text-sm font-medium">
												${tax.toLocaleString()}
											</span>
										</div>
										<div className="flex justify-between py-3 border-t-2 border-gray-900 font-bold text-lg">
											<span>Total:</span>
											<span>${total.toLocaleString()}</span>
										</div>
									</div>
								</div>

								{/* Terms */}
								<div className="text-xs text-gray-600 mb-6 bg-gray-50 p-4 rounded-lg">
									<p className="mb-2 font-medium">Terms & Conditions:</p>
									<ul className="space-y-1 list-disc list-inside">
										<li>
											This quote is valid for 30 days from the date of issue
										</li>
										<li>
											Final pricing may vary ±20% based on site conditions and
											specific requirements
										</li>
										<li>Installation scheduling subject to availability</li>
										<li>
											Payment terms: 50% deposit, balance due upon completion
										</li>
									</ul>
								</div>
							</div>

							{/* Actions */}
							<div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
								<button
									type="button"
									className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
								>
									Accept Quote & Schedule
								</button>
								<button
									type="button"
									className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
								>
									Download PDF
								</button>
							</div>
						</DialogPanel>
					</div>
				</div>
			</Dialog>
		);
	}

	return (
		<Dialog open={open} onClose={setOpen} className="relative z-50 col-span-2">
			<DialogBackdrop
				transition
				className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
			/>
			<div className="fixed inset-0 p-4 z-10 w-screen overflow-y-auto">
				<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
					<DialogPanel
						transition
						className="relative transform w-full overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
					>
						<div className="bg-white overflow-scroll px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
							<div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
								<button
									type="button"
									onClick={() => setOpen(false)}
									className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
								>
									<span className="sr-only">Close</span>
									<XMarkIcon aria-hidden="true" className="size-6" />
								</button>
							</div>

							{/* Header */}
							<div className="mb-6">
								<DialogTitle
									as="h2"
									className="text-2xl font-bold text-gray-900"
								>
									Build Your Quote
								</DialogTitle>
							</div>

							<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
								{/* Left: Customer Info & Add Service */}
								<div className="space-y-6">
									{/* Customer Information */}
									<div className="bg-gray-50 rounded-lg p-4">
										<h3 className="text-lg font-semibold text-gray-900 mb-4">
											Contact Information
										</h3>
										<div className="space-y-3">
											<div>
												<label className="block text-sm font-medium text-gray-700 mb-1">
													Company *
												</label>
												<input
													type="text"
													value={customerInfo.company}
													onChange={(e) =>
														setCustomerInfo((prev) => ({
															...prev,
															company: e.target.value,
														}))
													}
													className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
												/>
											</div>
											<div>
												<label className="block text-sm font-medium text-gray-700 mb-1">
													Name *
												</label>
												<input
													type="text"
													value={customerInfo.name}
													onChange={(e) =>
														setCustomerInfo((prev) => ({
															...prev,
															name: e.target.value,
														}))
													}
													className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
												/>
											</div>
											<div>
												<label className="block text-sm font-medium text-gray-700 mb-1">
													Email *
												</label>
												<input
													type="email"
													value={customerInfo.email}
													onChange={(e) =>
														setCustomerInfo((prev) => ({
															...prev,
															email: e.target.value,
														}))
													}
													className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
												/>
											</div>
											<div>
												<label className="block text-sm font-medium text-gray-700 mb-1">
													Phone
												</label>
												<input
													type="tel"
													value={customerInfo.phone}
													onChange={(e) =>
														setCustomerInfo((prev) => ({
															...prev,
															phone: e.target.value,
														}))
													}
													className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
												/>
											</div>
										</div>
									</div>

									{/* Add Service Form */}
									{!showAddForm ? (
										<button
											onClick={() => setShowAddForm(true)}
											className="w-full flex items-center justify-center px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
										>
											<PlusIcon className="w-5 h-5 mr-2" />
											Add Service
										</button>
									) : (
										<div className="bg-blue-50 rounded-lg p-4">
											<div className="flex justify-between items-center mb-4">
												<h3 className="font-semibold text-gray-900">
													Add Service
												</h3>
												<button
													onClick={() => setShowAddForm(false)}
													className="text-gray-400 hover:text-gray-600"
												>
													<XMarkIcon className="w-5 h-5" />
												</button>
											</div>

											<div className="space-y-4">
												{/* Service Type */}
												<div>
													<label className="block text-sm font-medium text-gray-700 mb-1">
														Service Type *
													</label>
													<Listbox
														value={currentService.serviceId}
														onChange={(value) =>
															setCurrentService({ serviceId: value, config: {} })
														}
													>
														<Label className="block text-sm/6 font-medium text-gray-900">
															Select a Service
														</Label>
														<div className="relative mt-2">
															<ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pr-2 pl-3 text-left text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6">
																<span className="col-start-1 row-start-1 truncate pr-6">
																	{selectedService
																		? selectedService.name
																		: "Select a service"}
																</span>
																<ChevronUpDownIcon
																	aria-hidden="true"
																	className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
																/>
															</ListboxButton>

															<ListboxOptions
																transition
																className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-hidden data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 sm:text-sm"
															>
																{services.map((service) => {
																	const IconComponent = iconMap[service.icon] || ComputerDesktopIcon;
																	return (
																		<ListboxOption
																			key={service.id}
																			value={service.id}
																			className="group relative cursor-default py-2 pr-4 pl-8 text-gray-900 select-none data-focus:bg-blue-600 data-focus:text-white data-focus:outline-hidden"
																		>
																			{({ selected, active }) => (
																				<>
																					<span
																						className={`block truncate font-normal ${
																							selected ? "font-semibold" : ""
																						}`}
																					>
																						<IconComponent className="inline w-4 h-4 mr-2" />
																						{service.name}
																					</span>
																					{selected && (
																						<span
																							className={`absolute inset-y-0 left-0 flex items-center pl-1.5 ${
																								active
																									? "text-white"
																									: "text-blue-600"
																							}`}
																						>
																							<CheckIcon
																								aria-hidden="true"
																								className="size-5"
																							/>
																						</span>
																					)}
																				</>
																			)}
																		</ListboxOption>
																	);
																})}
															</ListboxOptions>
														</div>
													</Listbox>
												</div>

												{/* Service Fields */}
												{selectedService && selectedServiceConfig && (
													<div className="space-y-3">
														{selectedServiceConfig.fields.map((field) =>
															renderField(
																field,
																currentService.config[field.name],
																(fieldName, value) =>
																	setCurrentService((prev) => ({
																		...prev,
																		config: {
																			...prev.config,
																			[fieldName]: value,
																		},
																	})),
															),
														)}
													</div>
												)}

												<button
													onClick={addLineItem}
													disabled={!currentService.serviceId}
													className="w-full rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
												>
													Add to Quote
												</button>
											</div>
										</div>
									)}
								</div>

								{/* Right: Quote Preview */}
								<div className="lg:col-span-2">
									<div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
										{/* Quote Header */}
										<div className="border-b border-gray-200 bg-gray-50 px-4 py-3">
											<h3 className="text-lg font-semibold text-gray-900">
												Quote Preview
											</h3>
										</div>

										{/* Line Items Table */}
										<div className="p-4">
											{lineItems.length === 0 ? (
												<div className="text-center py-12 text-gray-500">
													<CalculatorIcon className="w-12 h-12 mx-auto mb-4 text-gray-300" />
													<p className="text-lg font-medium">
														No services added yet
													</p>
													<p className="text-sm">
														Add a service to see your quote
													</p>
												</div>
											) : (
												<>
													<div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
														<table className="min-w-full divide-y divide-gray-300">
															<thead className="bg-gray-50">
																<tr>
																	<th className="px-3 py-2 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
																		Description
																	</th>
																	<th className="px-3 py-2 text-center text-xs font-medium uppercase tracking-wide text-gray-500">
																		Qty
																	</th>
																	<th className="px-3 py-2 text-right text-xs font-medium uppercase tracking-wide text-gray-500">
																		Price
																	</th>
																	<th className="px-3 py-2 text-right text-xs font-medium uppercase tracking-wide text-gray-500">
																		Total
																	</th>
																	<th className="relative px-3 py-2">
																		<span className="sr-only">Actions</span>
																	</th>
																</tr>
															</thead>
															<tbody className="divide-y divide-gray-200 bg-white">
																{lineItems.map((item) => (
																	<tr key={item.id}>
																		<td className="px-3 py-3 text-sm text-gray-900">
																			{item.description}
																		</td>
																		<td className="px-3 py-3 text-sm text-gray-900 text-center">
																			{item.quantity}
																		</td>
																		<td className="px-3 py-3 text-sm text-gray-900 text-right">
																			${item.unitPrice.toLocaleString()}
																		</td>
																		<td className="px-3 py-3 text-sm font-medium text-gray-900 text-right">
																			${item.total.toLocaleString()}
																		</td>
																		<td className="px-3 py-3">
																			<button
																				onClick={() => removeLineItem(item.id)}
																				className="text-red-600 hover:text-red-900"
																			>
																				<XMarkIcon className="w-4 h-4" />
																			</button>
																		</td>
																	</tr>
																))}
															</tbody>
														</table>
													</div>

													{/* Totals */}
													<div className="mt-4 pt-4 border-t border-gray-200">
														<div className="flex justify-end">
															<div className="w-48 space-y-1">
																<div className="flex justify-between py-1">
																	<span className="text-sm text-gray-600">
																		Subtotal:
																	</span>
																	<span className="text-sm font-medium">
																		${subtotal.toLocaleString()}
																	</span>
																</div>
																<div className="flex justify-between py-1">
																	<span className="text-sm text-gray-600">
																		HST (13%):
																	</span>
																	<span className="text-sm font-medium">
																		${tax.toLocaleString()}
																	</span>
																</div>
																<div className="flex justify-between py-2 border-t border-gray-900 font-bold">
																	<span>Total:</span>
																	<span>${total.toLocaleString()}</span>
																</div>
															</div>
														</div>
													</div>
												</>
											)}
										</div>

										{/* Generate Quote Button */}
										{lineItems.length > 0 && (
											<div className="border-t border-gray-200 bg-gray-50 px-4 py-3">
												<button
													onClick={generateQuote}
													className="w-full rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
												>
													Generate Formal Quote
												</button>
											</div>
										)}
									</div>
								</div>
							</div>
						</div>
					</DialogPanel>
				</div>
			</div>
		</Dialog>
	);
}

// Main component with modal trigger that fetches services
function QuoteCreator() {
	const [open, setOpen] = useState(false);
	const [services, setServices] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	// Fetch services from API (same pattern as your carousel)
	const fetchServices = async () => {
		try {
			setLoading(true);
			setError(null);

			// Get CSRF token from DOM
			const csrfToken = document.getElementById('_tr_nonce_form')?.value;

			const response = await fetch('https://b2bcnc.test/api/v1/services', {
				method: 'GET',
				credentials: 'include',
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json',
					'X-Requested-With': 'XMLHttpRequest',
					...(csrfToken && { 'X-CSRF-TOKEN': csrfToken }),
				},
			});

			if (!response.ok) {
				throw new Error(`HTTP ${response.status}: ${response.statusText}`);
			}

			const data = await response.json();

			// Transform API data to match component format
			const transformedServices = data
				.filter(service => service.active === "1") // Only show active services
				.map(service => ({
					id: service.id,
					name: service.name,
					description: service.description,
					icon: service.icon,
					code: service.code,
					basePrice: service.base_price,
				}));

			setServices(transformedServices);
		} catch (err) {
			console.error('Failed to fetch services:', err);
			setError(err.message);
			setServices([]);
		} finally {
			setLoading(false);
		}
	};

	// Fetch services when component mounts
	useEffect(() => {
		fetchServices();
	}, []);

	return (
		<div className="bg-blue-50 py-16">
			<div className="mx-auto text-center px-4">
				<h2 className="text-3xl font-bold text-gray-900 mb-4">
					Get Your Instant Quote
				</h2>
				<p className="text-lg text-gray-600 mb-8">
					Configure your IT services and get an accurate estimate in minutes. No
					sales calls required.
				</p>

				{error && (
					<div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 max-w-md mx-auto">
						<p className="text-red-700">Error loading services: {error}</p>
						<button
							onClick={fetchServices}
							className="mt-2 text-red-600 hover:text-red-800 font-medium"
						>
							Try Again
						</button>
					</div>
				)}

				<button
					onClick={() => setOpen(true)}
					disabled={loading || services.length === 0}
					className="inline-flex items-center rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
				>
					<CalculatorIcon className="w-5 h-5 mr-2" />
					{loading ? 'Loading Services...' : 'Build Your Quote'}
				</button>

				<p className="text-sm text-gray-500 mt-4">
					✓ 80% accurate pricing ✓ No obligation ✓ Instant results
				</p>
			</div>

			<QuoteModal open={open} setOpen={setOpen} services={services} />
		</div>
	);
}

export default QuoteCreator;
