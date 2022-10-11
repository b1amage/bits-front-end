import React from "react";
import PageContainer from "../components/utilities/container/Container";
import InputPreview from "./InputPreview";
import ButtonPreview from "./ButtonPreview";

const Preview = () => {
	return (
		<PageContainer className="flex flex-col gap-10">
			<InputPreview />

			<ButtonPreview />
		</PageContainer>
	);
};

export default Preview;
