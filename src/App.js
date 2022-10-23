import { Routes, Route } from "react-router-dom";
import RegisterPage from "./views/RegisterPage";
import Preview from "./preview/Preview";

import ForgotPasswordPage from "./views/ForgotPasswordPage";
import ProfilePage from "./views/ProfilePage";

import Login from "./components/Login";
import Successful from "./components/Successful";
import HomePage from "./views/HomePage";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Preview />} />
			<Route path="/forgot-password" element={<ForgotPasswordPage />} />
			<Route path="/profile" element={<ProfilePage />} />
			<Route path="/profile/:type" element={<ProfilePage />} />
			<Route path="/" element={<HomePage />} />
			<Route path="/preview" element={<Preview />} />
			<Route path="/register" element={<RegisterPage />} />
			<Route path="/login" element={<Login />} />
			<Route path="/successful" element={<Successful />} />
		</Routes>
	);
};

export default App;
