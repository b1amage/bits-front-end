import React from "react";
import Container from "./utilities/container/Container";
import Text from "./utilities/text/Text";
import Emoji from './utilities/image/Emoji';

const Successful = () => {
    return (
        <Container className="successful">
            <Text className="text-center">
                <span className="text-secondary-10">Successful</span>
            </Text>
            <Emoji className="mx-auto my-20 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500" />
            <Text className="my-10">
            Congratulations! Your blog has been published and can be seen by many people.
            Continue to develop your talents! 
            </Text>
        </Container>   
    )
}

export default Successful;