import { useState, useEffect } from "react";
import Container from "components/utilities/container/Container";
import SearchBox from "components/search/SearchBox";
import ScrollContainer from "components/utilities/container/ScrollContainer";
import Category from "components/category/Category";
import blogBg from "assets/svg/blog-bg.svg";
import Image from "components/utilities/image/Image";
import Title from "components/utilities/text/Title";
import FeatureBlog from "components/blog/FeatureBlog";
import Blog from "components/blog/Blog";
import topics from "content/topics";
import blogApi from "../api/blogApi";

const HomePage = () => {
	const [blogs, setBlogs] = useState([]);
	const [favBlogs, setFavBlogs] = useState([]);
	const [currentCategory, setCurrentCategory] = useState("");

	useEffect(() => {
		const fetchBlog = async () => {
			const response = await blogApi.getAll();
			console.log(response.data.results);
			setBlogs(response.data.results);
		};

		fetchBlog();
	}, []);

	useEffect(() => {
		const fetchFavBlog = async () => {
			const response = await blogApi.getAllFavorite();
			console.log("fav: ", response.data.results);
			setFavBlogs(response.data.results);
		};

		fetchFavBlog();
	}, []);

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
					{favBlogs?.length > 0 &&
						favBlogs.map((blog, index) => (
							<div
								key={index}
								className="relative flex w-full md:w-[400px] md:h-[400px] scroll-item"
							>
								<Image src={blogBg} className="w-full" />

								<FeatureBlog
									className="absolute -translate-x-1/2 bottom-10 left-1/2"
									name={blog.user.username}
									readTime={blog.timeToRead}
									title={blog.title}
									userAvatar={blog.user.avatar}
								/>
							</div>
						))}
				</ScrollContainer>
			</section>

			{/* Blog */}
			<section>
				<Title>Blogs</Title>
				<ScrollContainer className="my-2 md:!gap-4 lg:!gap-5">
					{blogs.length > 0 &&
						blogs.map((blog, index) => (
							<Blog
								key={index}
								author={blog.user.username}
								likeCount={blog.heartCount}
								readCount={912}
								date={blog.createdAt.slice(0, 10)}
								className="scroll-item max-w-[90%]"
								title={blog.title}
							/>
						))}
				</ScrollContainer>
			</section>
		</Container>
	);
};

export default HomePage;
