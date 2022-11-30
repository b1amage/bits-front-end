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

// const dummyContent = [
// 	"Why do you do what you do? More specifically why do you do the work that you do?",
// 	"Do you do it for praise? Do you want to be known and respected? Or is it something else? I was talking once with a woman who did a lot of consulting work for manufacturers. She would come into their plants, review how they moved around materials, where people assembled things, and how they did it.",
// 	"She would do time studies, take detailed notes, and provide presentations to executives. Ultimately, she would be able to provide them with impressive. good process will get good result too.",
// ];

const BlogDetailPage = () => {
	const [blog, setBlog] = useState();
	const [content, setContent] = useState();
	const [author, setAuthor] = useState();
	const navigate = useNavigate();
	const { id } = useParams();
	useEffect(() => {
		const fetchBlogContent = async () => {
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
		};

		fetchBlogContent();
	}, [id, navigate]);

	return (
		<Container className="flex flex-col gap-8 lg:gap-12">
			{/* Blog author's info */}
			{/* name, readTime, userImg */}
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
					src={blog?.banner === "default" ? banner : blog?.banner}
					alt="blog banner"
					className="overflow-hidden rounded-lg lg:w-[800px]"
				/>

				{/* Stats */}
				<BlogStats />
			</div>

			{/* Content */}
			<BlogContent content={content} />
		</Container>
	);
};

export default BlogDetailPage;
