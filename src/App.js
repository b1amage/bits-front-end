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
import ResetPage from "./views/ResetPage";
import WritePostPage from "./views/WritePostPage";

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
				<Route path="/password/reset" element={<ResetPage />} />
				<Route path="/profile" element={<ProfilePage />} />
				<Route path="/preview" element={<Preview />} />
				<Route path="/register" element={<RegisterPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/successful" element={<SuccessfulPage />} />
				<Route path="/blog/:id" element={<BlogDetailPage />} />
				<Route path="/post/write" element={<WritePostPage />} />
			</Routes>
		</>
	);
};

export default App;
