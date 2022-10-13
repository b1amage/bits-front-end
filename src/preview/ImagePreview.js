import React from "react";
import Image from "../components/utilities/image/Image";
import Logo from "../components/utilities/image/Logo";

const ImagePreview = () => {
	return (
		<>
			<div className="flex flex-col gap-5">
				<h1 className="text-2xl font-bold lg:text-4xl text-primary-100">
					Image component
				</h1>
				<Image
					animate
					className="w-96 h-96"
					src="https://images.unsplash.com/photo-1665510393390-287ac26e315f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80"
				/>
			</div>

			<div className="flex flex-col gap-5">
				<h1 className="text-2xl font-bold lg:text-4xl text-primary-100">
					Logo component
				</h1>
				<Logo />
			</div>
		</>
	);
};

export default ImagePreview;
