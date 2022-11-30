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
import blogApi from "api/blogApi";
import Loading from "components/loading/Loading";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
	const [blogs, setBlogs] = useState([]);
	const [favBlogs, setFavBlogs] = useState([]);
	const [currentCategory, setCurrentCategory] = useState("");
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		const fetchBlog = async () => {
			setLoading(true);
			const response = await blogApi.getAll(navigate);
			setBlogs(response.data.results);
			setLoading(false);
		};

		fetchBlog();
	}, [navigate]);

	useEffect(() => {
		const fetchFavBlog = async () => {
			setLoading(true);
			const response = await blogApi.getAllFavorite(navigate);
			setFavBlogs(response.data.results);
			setLoading(false);
		};

		fetchFavBlog();
	}, [navigate]);

	const handleCategoryClick = (e) => {
		const fetchBlogByCategory = async () => {
			setLoading(true);
			const responseFavBlog = await blogApi.getBlogsByCategory(
				e.target.id,
				"favorite",
				navigate
			);

			console.log(responseFavBlog);

			const responseBlog = await blogApi.getBlogsByCategory(
				e.target.id,
				"latest",
				navigate
			);

			setFavBlogs(responseFavBlog.data.results);
			setBlogs(responseBlog.data.results);
			setLoading(false);
		};

		// set current category (add css)
		setCurrentCategory(e.target.id);
		// call API get blog by category
		fetchBlogByCategory();
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
					{loading ? (
						<Loading />
					) : (
						favBlogs?.length > 0 &&
						favBlogs.map((blog, index) => (
							<div
								key={index}
								className="relative flex w-full md:w-[400px] md:h-[400px] scroll-item"
							>
								<Image src={blogBg} className="w-full" />

								<FeatureBlog
									blogId={blog._id}
									className="absolute -translate-x-1/2 bottom-10 left-1/2"
									name={blog.user.username}
									readTime={blog.timeToRead}
									title={blog.title}
									userAvatar={blog.user.avatar}
								/>
							</div>
						))
					)}
				</ScrollContainer>
			</section>

			{/* Blog */}
			<section>
				<Title>Blogs</Title>
				<ScrollContainer className="my-2 md:!gap-4 lg:!gap-5">
					{loading ? (
						<Loading />
					) : (
						blogs.length > 0 &&
						blogs.map((blog, index) => (
							<Blog
								blogId={blog._id}
								key={index}
								author={blog.user.username}
								likeCount={blog.heartCount}
								readCount={912}
								date={blog.createdAt.slice(0, 10)}
								className="scroll-item max-w-[90%]"
								title={blog.title}
							/>
						))
					)}
				</ScrollContainer>
			</section>
		</Container>
	);
};

export default HomePage;
