import { Routes, Route } from "react-router-dom";

import Preview from "./preview/Preview";
import Blog from "./components/blog/Blog";
import Container from "./components/utilities/container/Container";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Preview />} />
			<Route
				path="/blog"
				element={
					<Container>
						<Blog
							title="Three Life Lessons From a Dying Man"
							likeCount={324}
							readCount={555}
							author="Aaron Nichols"
							date="20/10/2022"
						/>
					</Container>
				}
			/>
		</Routes>
	);
};

export default App;
