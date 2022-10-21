import { Routes, Route } from "react-router-dom";

import Preview from "./preview/Preview";
import RegisterPage from "./views/RegisterPage";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Preview />} />
			<Route path="/register" element={<RegisterPage />} />
		</Routes>
	);
};

export default App;
