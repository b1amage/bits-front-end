import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Container from "components/utilities/container/Container";
import AuthorInfo from "components/blog/AuthorInfo";
import Title from "components/utilities/text/Title";
import banner from "assets/svg/dummyBanner.svg";
import Image from "components/utilities/image/Image";
import BlogStats from "components/blog/BlogStats";
import BlogContent from "components/blog/BlogContent";
import blogApi from "api/blogApi";
import authorApi from "api/userApi";
import Loading from "components/loading/Loading";

const BlogDetailPage = () => {
	const [blog, setBlog] = useState();
	const [loading, setLoading] = useState(false);
	const [content, setContent] = useState();
	const [author, setAuthor] = useState();
	const navigate = useNavigate();
	const { id } = useParams();
	useEffect(() => {
		const fetchBlogContent = async () => {
			setLoading(true);
			const response = await blogApi.getBlogDetail(id, navigate);
			console.log(response);
			setBlog(response.data.blog);

			function decode(str) {
				let txt = new DOMParser().parseFromString(str, "text/html");

				return txt.documentElement.textContent;
			}

			const txt = decode(response.data.blog.content);

			setContent(txt);

			const fetchAuthor = async (res) => {
				const response = await authorApi.getById(
					res.data.blog.user,
					navigate
				);
				console.log(response);
				setAuthor(response.data.user);
			};

			fetchAuthor(response);

			setLoading(false);
		};

		fetchBlogContent();
	}, [id, navigate]);

	return (
		<Container className="flex flex-col gap-8 lg:gap-12">
			{loading ? (
				<div className="flex items-center justify-center min-h-[80vh]">
					<Loading />
				</div>
			) : (
				<>
					{/* Blog author's info */}
					<AuthorInfo
						readTime={blog?.timeToRead}
						name={author?.username}
						userImg={author?.avatar}
					/>

					{/* Title */}
					<Title className="!text-3xl md:!text-4xl lg:!text-6xl">
						{blog?.title}
					</Title>

					<div className="flex flex-col gap-4 md:w-4/5 lg:w-full md:mx-auto md:gap-6">
						{/* Banner */}
						<Image
							src={
								blog?.banner === "default"
									? banner
									: blog?.banner
							}
							alt="blog banner"
							className="overflow-hidden rounded-lg lg:w-[800px]"
						/>

						{/* Stats */}
						<BlogStats />
					</div>

					{/* Content */}
					<BlogContent content={content} />
				</>
			)}
		</Container>
	);
};

export default BlogDetailPage;
