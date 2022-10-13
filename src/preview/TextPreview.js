import React from "react";
import Text from "../components/utilities/text/Text";
import Title from "../components/utilities/text/Title";

const TextPreview = () => {
	return (
		<>
			<div className="flex flex-col gap-5">
				<h1 className="text-2xl font-bold lg:text-4xl text-primary-100">
					Title component
				</h1>

				<Title>Sample title</Title>
			</div>

			<div className="flex flex-col gap-5">
				<h1 className="text-2xl font-bold lg:text-4xl text-primary-100">
					Text component
				</h1>

				<Text>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Cumque, nisi veritatis ut totam quod atque beatae voluptate
					blanditiis quas tempora, omnis enim, sit eius harum! Rem
					magnam distinctio facilis! Ratione perspiciatis veniam earum
					accusamus perferendis asperiores aut debitis sed iusto
					soluta rem, ut doloremque, iure temporibus? Eligendi eveniet
					odio soluta.
				</Text>
			</div>
		</>
	);
};

export default TextPreview;
