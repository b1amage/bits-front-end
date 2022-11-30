import Image from "components/utilities/image/Image";
import Title from "components/utilities/text/Title";
import Text from "components/utilities/text/Text";
import bannerImg from "assets/svg/cmsBanner.svg";

const CMSBanner = ({username}) => {
	return (
		<div className="relative flex w-full gap-3 p-5 shadow-2xl lg:p-10 bg-primary-100 rounded-xl md:w-4/5 md:mx-auto lg:w-4/5">
			<div className="flex flex-col justify-center gap-4 lg:gap-10">
				<Title className="!text-white lg:!text-6xl">Welcome, {username}</Title>
				<Text className="!text-white !font-thin lg:!text-4xl">
					This is your CMS dashboard, you can freely edit your stuff
				</Text>
			</div>

			<Image className="w-1/2 lg:w-1/3" src={bannerImg} alt="banner" />
		</div>
	);
};

export default CMSBanner;
