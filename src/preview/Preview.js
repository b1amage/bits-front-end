import React from "react";
import PageContainer from "../components/utilities/container/Container";
import InputPreview from "./InputPreview";
import ButtonPreview from "./ButtonPreview";
import LoadingPreview from "./LoadingPreview";
import CheckboxPreview from "./CheckboxPreview";
import ImagePreview from "./ImagePreview";
import TextPreview from "./TextPreview";
import NavBarPreview from "./NavBarPreview";

const Preview = () => {
	return (
		<PageContainer className="flex flex-col gap-10">
			<NavBarPreview />
			<InputPreview />
			<ButtonPreview />
			<LoadingPreview />
			<CheckboxPreview />
			<ImagePreview />
			<TextPreview />
		</PageContainer>
	);
};

export default Preview;
