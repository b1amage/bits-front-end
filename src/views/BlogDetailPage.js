import React from "react";
import Container from "../components/utilities/container/Container";

import AuthorInfo from "../components/blog/AuthorInfo";
import Title from "../components/utilities/text/Title";
import banner from "../assets/svg/dummyBanner.svg";
import Image from "../components/utilities/image/Image";
import BlogStats from "../components/blog/BlogStats";
import BlogContent from "../components/blog/BlogContent";

const dummyContent = [
	"Why do you do what you do? More specifically why do you do the work that you do?",
	"Do you do it for praise? Do you want to be known and respected? Or is it something else? I was talking once with a woman who did a lot of consulting work for manufacturers. She would come into their plants, review how they moved around materials, where people assembled things, and how they did it.",
	"She would do time studies, take detailed notes, and provide presentations to executives. Ultimately, she would be able to provide them with impressive. good process will get good result too.",
];

const BlogDetailPage = () => {
	return (
		<Container className="flex flex-col gap-8 lg:gap-12">
			{/* Blog author's info */}
			<AuthorInfo />

			{/* Title */}
			<Title className="!text-3xl md:!text-4xl lg:!text-6xl">
				Let’s Go Put Ourselves Out of Business
			</Title>

			<div className="flex flex-col gap-4 md:w-4/5 lg:w-full md:mx-auto md:gap-6">
				{/* Banner */}
				<Image
					src={banner}
					alt="blog banner"
					className="overflow-hidden rounded-lg lg:w-[800px]"
				/>

				{/* Stats */}
				<BlogStats />
			</div>

			{/* Content */}
			<BlogContent content={dummyContent} />
		</Container>
	);
};

export default BlogDetailPage;
