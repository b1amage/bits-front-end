import React from "react";
import Container from "../components/utilities/container/Container";
import Title from "../components/utilities/text/Title";
import Text from "../components/utilities/text/Text";
import Button from "../components/utilities/button/Button";
import TopicList from "./TopicList";

const TopicPage = () => {
    return (
        <Container className="flex flex-col items-center justify-center h-screen gap-4">
            <div className="flex flex-col gap-4 md:gap-8">
				<Title className="text-center">Welcome to</Title>
                <Title className="text-center">Blogie!</Title>
				<Text className="text-center">
                    Select at least 3 topics to personalize your homepage
				</Text>
            </div>
                <TopicList />
                <Button type="submit" primary fluid class="my-10 md:py-5">
					Continue
				</Button>
			

        </Container>
    );
};

export default TopicPage;