import React from "react";
import { useParams } from "react-router-dom";
import posts from "../../content/posts";
import PostCard from "../post/PostCard";
import PostListNavBar from "../post/PostListNavBar";

const PostList = () => {
	const { type } = useParams();

	return (
		<div
			className={`2xl:max-w-full rounded-t-3xl bg-white flex flex-col justify-center px-8 md:px-16 lg:px-40 xl:px-52`}
		>
			<PostListNavBar />

			{/* return the list of posts that user has posted on if the path contain /post or nothing */}
			{type == null || type === "post"
				? posts
						.filter((post) => post.author === "Davis Gouse")
						.map((post, index) => {
							return (
								<PostCard
									thumbnail={post.thumbnail}
									title={post.title}
									views={post.views}
									comments={post.comments}
									likes={post.likes}
									time={post.time}
									author={post.author}
									postType={type}
									key={index}
								/>
							);
						})
				: type === "latest" // return all posts shared in the app from the newest to the oldest if the route contain /latest
				? posts.map((post, index) => {
						return (
							<PostCard
								thumbnail={post.thumbnail}
								title={post.title}
								views={post.views}
								comments={post.comments}
								likes={post.likes}
								time={post.time}
								author={post.author}
								postType={type}
								key={index}
							/>
						);
				  })
				: posts
						.filter((post) => post.isLiked) // return all posts that user has liked when the route contain /liked
						.map((post, index) => {
							return (
								<PostCard
									thumbnail={post.thumbnail}
									title={post.title}
									views={post.views}
									comments={post.comments}
									likes={post.likes}
									time={post.time}
									author={post.author}
									postType={type}
									key={index}
								/>
							);
						})}
		</div>
	);
};

export default PostList;
