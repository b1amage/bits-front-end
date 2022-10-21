import { Routes, Route } from "react-router-dom";

import Preview from "./preview/Preview";
import Login from "./components/Login"
const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Preview />} />
			<Route path="/login" element={<Login />} />
		</Routes>
	);

};

export default App;
