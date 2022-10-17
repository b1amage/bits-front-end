import { Routes, Route } from "react-router-dom";

import Preview from "./preview/Preview";
import ForgotPasswordPage from "./views/ForgotPasswordPage";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Preview />} />
			<Route path="/forgot-password" element={<ForgotPasswordPage />} />
		</Routes>
	);

};

export default App;
