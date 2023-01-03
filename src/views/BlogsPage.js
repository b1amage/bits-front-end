import Container from "components/utilities/container/Container";
import { useState, useEffect } from "react";
import blogApi from "api/blogApi";
import { useParams, useNavigate } from "react-router-dom";
import Blog from "components/blog/Blog";
import Title from "components/utilities/text/Title";
import Loading from "components/loading/Loading";
import notFound from "assets/svg/tv404.svg";
import Image from "components/utilities/image/Image";
import Text from "components/utilities/text/Text";
import Button from "components/utilities/button/Button";

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [nextCursor, setNextCursor] = useState(undefined);
  const { query } = useParams();
  const navigate = useNavigate();

  const handleViewMore = () => {
    const loadMore = async () => {
      setLoadingMore(true);
      const response = await blogApi.getBlogsByTitle(
        query,
        nextCursor,
        navigate
      );

      setBlogs([...blogs, ...response.data.results]);
      setNextCursor(response.data.next_cursor);

      setLoadingMore(false);
    };

    loadMore();
  };

  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true);
      const response = await blogApi.getBlogsByTitle(
        query,
        nextCursor,
        navigate
      );

      setBlogs(response.data.results);
      setNextCursor(response.data.next_cursor);

      setLoading(false);
    };

    fetchBlog();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, navigate]);

  return (
    <Container>
      <Title className="my-5 lg:my-10 !text-secondary-20">
        Results for "
        <span className="capitalize text-secondary-100">{query}</span>"
      </Title>
      {loading ? (
        <Loading />
      ) : blogs.length === 0 ? (
        <div className="min-h-[60vh] flex flex-col gap-5 lg:gap-10 items-center justify-center">
          <Image src={notFound} />
          <Text>Sorry we cannot find blog with this title</Text>
        </div>
      ) : (
        <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-3 lg:gap-10">
          {blogs.length !== 0 &&
            blogs.map((blog, index) => (
              <Blog
                blogId={blog._id}
                key={index}
                author={blog.user.username}
                likeCount={blog.heartCount}
                readCount={912}
                date={blog.createdAt.slice(0, 10)}
                className="w-full cursor-pointer"
                title={blog.title}
                img={blog.banner}
              />
            ))}
        </div>
      )}
      {loadingMore && <Loading />}
      {nextCursor !== null && (
        <div className="flex items-center justify-center my-10">
          <Button onClick={handleViewMore} primary>
            Load more
          </Button>
        </div>
      )}
    </Container>
  );
};

export default BlogsPage;
