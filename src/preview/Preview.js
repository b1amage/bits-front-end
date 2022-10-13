import React from "react";
import PageContainer from "../components/utilities/container/Container";
import InputPreview from "./InputPreview";
import ButtonPreview from "./ButtonPreview";
import LoadingPreview from "./LoadingPreview";
import CheckboxPreview from "./CheckboxPreview";

const Preview = () => {
	return (
		<PageContainer className="flex flex-col gap-10">
			<InputPreview />
			<ButtonPreview />
			<LoadingPreview />
			<CheckboxPreview />
		</PageContainer>
	);
};

export default Preview;
