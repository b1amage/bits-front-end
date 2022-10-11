import React from "react";
import PageContainer from "../components/utilities/container/Container";
import InputPreview from "./InputPreview";

const Preview = () => {
	return (
		<PageContainer className="flex flex-col gap-10">
			<InputPreview />
		</PageContainer>
	);
};

export default Preview;
