import Container from "components/utilities/container/Container";
import WritePostForm from "components/form/WritePostForm";

const WritePostPage = () => {
  return (
    <Container className="relative h-screen bg-teriary-gray-20 !p-0">
      <WritePostForm />
    </Container>
  );
};

export default WritePostPage;
