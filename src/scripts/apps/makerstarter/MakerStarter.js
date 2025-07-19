import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
	BrowserRouter,
} from "react-router-dom";

import DashboardLayout from "./layouts/DashboardLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Resources from "./pages/Resources";
import Portfolio from "./pages/Portfolio";
import Cases from "./pages/Cases";
import Shop from "./pages/Shop";

export default function MakerStarter() {
	return (
		<BrowserRouter basename="/">
			<Routes>
				<Route path="/" element={<Navigate to="/home" replace />} />
				<Route element={<DashboardLayout />}>
					<Route path="/" element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/services" element={<Services />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/resources" element={<Resources />} />
					<Route path="/portfolio" element={<Portfolio />} />
					<Route path="/cases" element={<Cases />} />
					<Route path="/shop" element={<Shop />} />
					<Route path="*" element={<Navigate to="/" replace />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
