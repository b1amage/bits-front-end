import { Routes, Route } from "react-router-dom";
import RegisterPage from "./views/RegisterPage";
import Preview from "./preview/Preview";
import Login from "./components/Login";
import Successful from "./components/Successful";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Preview />} />
			<Route path="/register" element={<RegisterPage />} />
			<Route path="/login" element={<Login />} />
			<Route path="/successful" element={<Successful />} />
		</Routes>
	);
};

export default App;
