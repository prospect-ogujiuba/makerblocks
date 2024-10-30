import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard";
import Applications from "../pages/Applications";
import Applicants from "../pages/Applicants";
import Courses from "../pages/Courses";
import Employers from "../pages/Employers";
import Database from "../pages/Database";
import Reports from "../pages/Reports";
import Settings from "../pages/Settings";

export default function ATSFlow() {
	return (
		<Router basename="/applicant-tracking-system">
			<Routes>
				<Route path="/" element={<Navigate to="/dashboard" replace />} />
				<Route element={<DashboardLayout />}>
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/applications" element={<Applications />} />
					<Route path="/applicants" element={<Applicants />} />
					<Route path="/courses" element={<Courses />} />
					<Route path="/employers" element={<Employers />} />
					<Route path="/database" element={<Database />} />
					<Route path="/reports" element={<Reports />} />
					<Route path="/settings" element={<Settings />} />
				</Route>
			</Routes>
		</Router>
	);
}
