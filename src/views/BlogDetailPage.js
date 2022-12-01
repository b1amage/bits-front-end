/* eslint-disable react-hooks/exhaustive-deps */
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
import decode from "helper/decode";
import CommentCard from "components/comment/CommentCard";
import Button from "components/utilities/button/Button";
import noComment from "assets/svg/no-comment.svg";

const BlogDetailPage = () => {
	const [blog, setBlog] = useState();
	const [loading, setLoading] = useState(false);
	const [content, setContent] = useState();
	const [author, setAuthor] = useState();
	const [comments, setComments] = useState([]);
	const [commentLoading, setCommentLoading] = useState(false);
	const [commentsNextCursor, setCommentsNextCursor] = useState(undefined);
	const navigate = useNavigate();
	const { id } = useParams();

	const fetchMoreComments = async () => {
		setCommentLoading(true);
		const response = await blogApi.getComments(
			blog._id,
			commentsNextCursor,
			navigate
		);
		console.log("more comment: ", response);
		setComments([...comments, ...response.data.results]);
		setCommentsNextCursor(response.data.next_cursor);
		setCommentLoading(false);
	};

	useEffect(() => {
		const fetchBlogContent = async () => {
			setLoading(true);
			const response = await blogApi.getBlogDetail(id, navigate);
			setBlog(response.data.blog);
			const txt = decode(response.data.blog.content);
			setContent(txt);

			const fetchAuthor = async (res) => {
				const response = await authorApi.getById(
					res.data.blog.user,
					navigate
				);
				setAuthor(response.data.user);
			};

			const fetchComments = async (res) => {
				setCommentLoading(true);
				const response = await blogApi.getComments(
					res.data.blog._id,
					commentsNextCursor,
					navigate
				);
				console.log("comment: ", response);
				setComments(response.data.results);
				setCommentsNextCursor(response.data.next_cursor);
				setCommentLoading(false);
			};

			fetchAuthor(response);
			fetchComments(response);
			setLoading(false);
		};

		fetchBlogContent();
	}, [id, navigate]);

	const handleLikeClick = () => {
		const likeBlog = async () => {
			const response = await blogApi.likeBlog(blog._id, navigate);
			console.log(response);
			setBlog(response.data.blog);
		};

		likeBlog();
	};

	console.log(blog);

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
						<BlogStats
							likeCount={blog?.heartCount}
							onLike={handleLikeClick}
						/>
					</div>

					{/* Content */}
					<BlogContent content={content} />

					{/* Comments */}
					<div>
						<Title className="my-5 md:my-8 lg:my-10">
							Comments
						</Title>
						<div className="flex flex-col gap-5 md:gap-8 lg:gap-10">
							{commentLoading ? (
								<Loading />
							) : comments.length === 0 ? (
								<div className="mx-auto">
									<Image
										src={noComment}
										className="mx-auto lg:w-1/2"
									/>
									<Title className="!my-10">
										Be the first one to comment on this post
									</Title>
								</div>
							) : (
								comments.map((item, index) => (
									<CommentCard
										comment={item}
										key={item._id}
									/>
								))
							)}
						</div>

						{commentsNextCursor !== null && (
							<Button
								onClick={fetchMoreComments}
								className="my-10"
								primary
							>
								More comment
							</Button>
						)}
					</div>
				</>
			)}
		</Container>
	);
};

export default BlogDetailPage;
