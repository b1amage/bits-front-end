import Loading from "components/loading/Loading";
import Container from "components/utilities/container/Container";

const LoadingPage = () => {
  return (
    <Container className="flex items-center justify-center min-h-screen">
      <Loading />
    </Container>
  );
};

export default LoadingPage;
