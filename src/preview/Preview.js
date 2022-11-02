import PageContainer from "components/utilities/container/Container";
import InputPreview from "preview/InputPreview";
import ButtonPreview from "preview/ButtonPreview";
import LoadingPreview from "preview/LoadingPreview";
import CheckboxPreview from "preview/CheckboxPreview";
import ImagePreview from "preview/ImagePreview";
import TextPreview from "preview/TextPreview";
import NavBarPreview from "preview/NavBarPreview";

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
