import { useState } from "react";
import Container from "../components/utilities/container/Container";
import SearchBox from "../components/search/SearchBox";
import ScrollContainer from "../components/utilities/container/ScrollContainer";
import Category from "../components/category/Category";
import blogBg from "../assets/svg/blog-bg.svg";
import Image from "../components/utilities/image/Image";
import Title from "../components/utilities/text/Title";
import FeatureBlog from "../components/blog/FeatureBlog";
import Blog from "../components/blog/Blog";
import topics from "../content/topics";

const HomePage = () => {
	// const [blogs, setBlogs] = useState([]);
	const [currentCategory, setCurrentCategory] = useState("");

	const handleCategoryClick = (e) => {
		// set current category (add css)
		setCurrentCategory(e.target.id);
		// call API get blog by category
		// set blogs to data.results
	};
	return (
		<Container>
			<SearchBox />

			{/* Category list */}
			<ScrollContainer className="my-4">
				{topics.length > 0 &&
					topics.map((item, index) => (
						<Category
							isActive={item.value === currentCategory}
							id={item.value}
							onClick={handleCategoryClick}
							key={index}
						>
							{item.value}
						</Category>
					))}
			</ScrollContainer>

			{/* Feature Blogs */}
			<section className="my-8">
				<Title>Feature</Title>

				<ScrollContainer className="my-2 md:!gap-4 lg:!gap-5">
					{Array(10)
						.fill()
						.map((_, index) => (
							<div
								key={index}
								className="relative flex w-full md:w-[400px] md:h-[400px] scroll-item"
							>
								<Image src={blogBg} className="w-full" />

								<FeatureBlog
									className="absolute -translate-x-1/2 bottom-10 left-1/2"
									name="Kyle Nguyen"
									readTime={20}
									title="How to cua gai 101? Bach tan bach trung"
								/>
							</div>
						))}
				</ScrollContainer>
			</section>

			{/* Blog */}
			<section>
				<Title>Blogs</Title>
				<ScrollContainer className="my-2 md:!gap-4 lg:!gap-5">
					{Array(10)
						.fill()
						.map((item, index) => (
							<Blog
								key={index}
								author="Kyle Nguyen"
								likeCount={810}
								readCount={912}
								date="09/12/2022"
								className="scroll-item max-w-[90%]"
								title="Kyle co mot ngui bo xinh dep ten Quynh"
							/>
						))}
				</ScrollContainer>
			</section>
		</Container>
	);
};

export default HomePage;
