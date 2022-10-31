import { useState } from "react";
import Container from "../components/utilities/container/Container";
import Title from "../components/utilities/text/Title";
import Text from "../components/utilities/text/Text";
import Button from "../components/utilities/button/Button";
import topics from "../content/topics";
import TopicList from "../components/topic/TopicList";

const TopicPage = () => {
	const [selectedTopics, setSelectedTopics] = useState([]);

	const handleTopicClick = (e) => {
		selectedTopics.includes(e.target.id)
			? setSelectedTopics(
					selectedTopics.filter((item) => item !== e.target.id)
			  )
			: setSelectedTopics([...selectedTopics, e.target.id]);
	};

	return (
		<Container className="flex flex-col min-h-screen gap-4">
			<div className="flex flex-col gap-4 my-10 md:gap-8">
				<Title className="text-center">Welcome to</Title>
				<Title className="text-center">Blogie!</Title>
				<Text className="text-center">
					Select at least 3 topics to personalize your homepage
				</Text>
			</div>

			<TopicList
				topics={topics}
				onClick={handleTopicClick}
				selectedTopics={selectedTopics}
			/>

			<Button
				type="submit"
				primary
				fluid
				class="my-10 md:py-5"
				onClick={() => console.log(selectedTopics)}
			>
				Continue
			</Button>
		</Container>
	);
};

export default TopicPage;
