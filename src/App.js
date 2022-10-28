import { Routes, Route } from "react-router-dom";
import RegisterPage from "./views/RegisterPage";
import Preview from "./preview/Preview";
import ForgotPasswordPage from "./views/ForgotPasswordPage";
import ProfilePage from "./views/ProfilePage";
import HomePage from "./views/HomePage";
import LoginPage from "./views/LoginPage";
import SuccessfulPage from "./views/SuccessfulPage";
import BlogDetailPage from "./views/BlogDetailPage";
import NavBar from "./components/navigation/NavBar";

const App = () => {
	return (
		<>
			<NavBar />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route
					path="/forgot-password"
					element={<ForgotPasswordPage />}
				/>
				<Route path="/profile" element={<ProfilePage />} />
				<Route path="/profile/:type" element={<ProfilePage />} />
				<Route path="/preview" element={<Preview />} />
				<Route path="/register" element={<RegisterPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/successful" element={<SuccessfulPage />} />
				<Route path="/blog/:id" element={<BlogDetailPage />} />
			</Routes>
		</>
	);
};

export default App;
