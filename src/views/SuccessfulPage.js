import Container from "components/utilities/container/Container";
import Emoji from "components/utilities/image/Emoji";
import Text from "components/utilities/text/Text";
import Title from "components/utilities/text/Title";

const SuccessfulPage = () => {
	return (
		<Container className="flex flex-col items-center justify-center h-screen gap-4">
			<Title className="text-center text-secondary-10">Successful</Title>
			<Emoji />
			<Text className="text-justify md:text-center">
				Congratulations! Your blog has been published and can be seen by
				many people. Continue to develop your talents!
			</Text>
		</Container>
	);
};

export default SuccessfulPage;
