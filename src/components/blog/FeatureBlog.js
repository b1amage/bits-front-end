import React from "react";
import Image from "../utilities/image/Image";
import Title from "../utilities/text/Title";

const defaultImg =
	"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80";

const FeatureBlog = ({ className, userAvatar, name, readTime, title }) => {
	return (
		<div
			className={`w-[90%] rounded-3xl bg-white shadow-lg px-6 py-3 flex flex-col gap-4 ${className}`}
		>
			<div className="flex items-center gap-3">
				<Image
					className="!rounded-full w-[50px] h-[50px]"
					src={userAvatar || defaultImg}
					alt="user avatar"
				/>

				<div>
					<h3 className="text-lg font-semibold text-secondary-100">
						{name}
					</h3>
					<p className="font-light text-secondary-20">
						{readTime} mins read
					</p>
				</div>
			</div>

			<Title className="text-lg leading-tight">{title}</Title>
		</div>
	);
};

export default FeatureBlog;
