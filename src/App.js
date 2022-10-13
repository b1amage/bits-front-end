import { Routes, Route } from "react-router-dom";

import Preview from "./preview/Preview";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Preview />} />
		</Routes>
	);

};

export default App;
