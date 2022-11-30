import Container from "components/utilities/container/Container";
import { useState, useEffect } from "react";
import blogApi from "api/blogApi";
import { useParams, useNavigate } from "react-router-dom";
import Blog from "components/blog/Blog";
import Title from "components/utilities/text/Title";
import Loading from "components/loading/Loading";

const BlogsPage = () => {
	const [blogs, setBlogs] = useState([]);
	const [loading, setLoading] = useState(false);
	const { query } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		const fetchBlog = async () => {
			setLoading(true);
			const response = await blogApi.getBlogsByTitle(query, navigate);
			setBlogs(response.data.results);
			setLoading(false);
		};

		fetchBlog();
	}, [query, navigate]);
	console.log(blogs);
	return (
		<Container>
			<Title className="my-5 lg:my-10 !text-secondary-20">
				All results for{" "}
				<span className="capitalize text-secondary-100">{query}</span>
			</Title>

			{loading ? (
				<Loading />
			) : (
				<div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-3 lg:gap-10">
					{blogs.length > 0 &&
						blogs.map((blog, index) => (
							<Blog
								blogId={blog._id}
								key={index}
								author={blog.user.username}
								likeCount={blog.heartCount}
								readCount={912}
								date={blog.createdAt.slice(0, 10)}
								className="w-full cursor-pointer"
								title={blog.title}
							/>
						))}
				</div>
			)}
		</Container>
	);
};

export default BlogsPage;
