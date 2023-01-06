import Container from "components/utilities/container/Container";
import Image from "components/utilities/image/Image";
import noInternet from "assets/svg/no-internet.svg";
import Title from "components/utilities/text/Title";

const NoInternetPage = () => {
  return (
    <Container className="flex flex-col items-center justify-center min-h-screen gap-5 md:gap-8 lg:gap-10">
      <Image src={noInternet} />

      <div>
        <Title className="capitalize !text-center">
          No internet connection
        </Title>
        <Title className="capitalize !text-center">
          Please check your internet and try again
        </Title>
      </div>
    </Container>
  );
};

export default NoInternetPage;
