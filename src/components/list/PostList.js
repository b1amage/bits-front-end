import React, { useState } from "react";
// import posts from "../../content/posts";
import PostCard from "components/post/PostCard";
import PostListNavBar from "components/post/PostListNavBar";
// import blogApi from "api/blogApi";
import Loading from "components/loading/Loading";
import Container from "components/utilities/container/Container";
import Button from "components/utilities/button/Button";
import blogApi from "api/blogApi";

const PostList = ({ count, userId , userBlogs, setUserBlogs, nextCursor, setNextCursor }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleViewMoreBlogs = async () => {
    setIsLoading(true);
    const response = await blogApi.getUserBlogs({
      userId: userId,
      currentCategory: "",
      currentSearch: "",
    }, nextCursor);
    setUserBlogs([...userBlogs, ...response.data.results]);
    setNextCursor(response.data.next_cursor);
    setIsLoading(false);
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
      <div className="w-full flex justify-center">
        <Button
          primary
          className={`!min-w-0 !w-[50px] !h-[50px] !text-5xl !rounded-full -translate-x-1/2 ${nextCursor === null || isLoading ? "hidden" : ""}`}
          onClick={handleViewMoreBlogs}
        >
          +
        </Button>
      </div>
      
    </Container>
  );
};

export default PostList;
