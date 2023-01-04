import React, { useEffect, useState } from "react";
import PostCard from "components/post/PostCard";
import PostListNavBar from "components/post/PostListNavBar";
import Loading from "components/loading/Loading";
import Container from "components/utilities/container/Container";
import Button from "components/utilities/button/Button";
import blogApi from "api/blogApi";

const PostList = ({
  count,
  userId,
  userBlogs,
  setUserBlogs,
  nextCursor,
  setNextCursor,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadMore, setLoadMore] = useState(false);

  useEffect(() => {
    const getAllUserBlogs = async () => {
      setIsLoading(true);
      const response = await blogApi.getUserBlogs({
        userId: userId,
        currentCategory: "",
        currentSearch: "",
      });

      setNextCursor(response.data.next_cursor);
      setUserBlogs(response.data.results);
      setIsLoading(false);
    };
    getAllUserBlogs();
  }, [setNextCursor, setUserBlogs, userId]);

  const handleViewMoreBlogs = async () => {
    setLoadMore(true);
    const response = await blogApi.getUserBlogs(
      {
        userId: userId,
        currentCategory: "",
        currentSearch: "",
      },
      nextCursor
    );
    setUserBlogs([...userBlogs, ...response.data.results]);
    setNextCursor(response.data.next_cursor);
    setLoadMore(false);
  };

  // format datetime in month day, year
  const formatDate = (strDateTime) => {
    var options = { day: "numeric", month: "long", year: "numeric" };
    return new Date(strDateTime).toLocaleDateString([], options);
  };

  return (
    <Container
      className={`2xl:max-w-full rounded-t-3xl bg-white flex flex-col justify-center !py-4 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-48 2xl:px-60`}
    >
      <PostListNavBar />

      {/* return the list of posts that user has posted on if the path contain /post or nothing */}
      {isLoading ? (
        <Loading />
      ) : (
        userBlogs.map((post, index) => {
          return (
            <PostCard
              blogId={post._id}
              thumbnail={post.banner}
              title={post.title}
              // views={post.timeToRead}
              // comments={post.comments}
              likes={post.heartCount}
              time={formatDate(post.createdAt)}
              author={post.author}
              key={index}
            />
          );
        })
      )}

      {loadMore ? (
        <Loading />
      ) : (
        userBlogs
          .filter((blog) => !userBlogs.includes(blog))
          .map((post, index) => {
            return (
              <PostCard
                blogId={post._id}
                thumbnail={post.banner}
                title={post.title}
                // views={post.timeToRead}
                // comments={post.comments}
                likes={post.heartCount}
                time={formatDate(post.createdAt)}
                author={post.author}
                key={index}
              />
            );
          })
      )}

      {!isLoading
        ? !loadMore && (
            <div className="flex justify-center w-full">
              <Button
                primary
                className={` !w-[60px] !h-[60px] !min-w-0 p-20 !rounded-full !text-5xl  ${
                  nextCursor === null || isLoading ? "hidden" : ""
                }`}
                onClick={handleViewMoreBlogs}
              >
                +
              </Button>
            </div>
          )
        : null}
    </Container>
  );
};

export default PostList;
