import React from "react";
import Container from "../components/utilities/container/Container";
import Emoji from "../components/utilities/image/Emoji"
import Text from "../components/utilities/text/Text";
import Title from "../components/utilities/text/Title";

const SuccessfulPage = () => {
  return (
    <Container className="flex flex-col justify-center items-center">
      <Title className={"text-center text-secondary-10"} children={"Successful"} />
      <Emoji />
      <Text
        className={"text-center"}
        children={
          "Congratulations! Your blog has been published and can be seen by many people. Continue to develop your talents!"
        }
      />
    </Container>
  );
};

export default SuccessfulPage;
