import { Routes, Route } from "react-router-dom";

import Preview from "./preview/Preview";
import ForgotPasswordPage from "./views/ForgotPasswordPage";
import ProfilePage from "./views/ProfilePage";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Preview />} />
			<Route path="/forgot-password" element={<ForgotPasswordPage />} />
			<Route path="/profile" element={<ProfilePage />} />
		</Routes>
	);

};

export default App;
