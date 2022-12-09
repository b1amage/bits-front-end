import React, { useEffect, useState } from "react";
// import posts from "../../content/posts";
import PostCard from "components/post/PostCard";
import PostListNavBar from "components/post/PostListNavBar";
import blogApi from "api/blogApi";
import Loading from "components/loading/Loading";
import Container from "components/utilities/container/Container";

const PostList = () => {
  // const [type, setType] = useState("post");
  const [userBlogs, setUserBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState(0)

  // format datetime in month day, year
  const formatDate = (strDateTime) => {
    var options = { day: "numeric", month: "long", year: "numeric" };
    return new Date(strDateTime).toLocaleDateString([], options);
  };

  useEffect(() => {
    const allUserBlogs = async () => {
      setIsLoading(true);
      const response = await blogApi.getUserBlogs({
        currentCategory: "",
        currentSearch: "",
      });
      // console.log(response.data);
      setUserBlogs(response.data.results);
      setCount(response.data.results.length)
      setIsLoading(false);
    };

    allUserBlogs();
  }, []);

  return (
    <Container
      className={`2xl:max-w-full rounded-t-3xl bg-white flex flex-col justify-center !py-4 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-48 2xl:px-60`}
    >
      <PostListNavBar quantity={count} />

      {/* return the list of posts that user has posted on if the path contain /post or nothing */}
      {isLoading ? (
        <Loading />
      ) :  (
        userBlogs.map((post, index) => {
            return (
              <PostCard
                blogId={post._id}
                thumbnail={post.banner}
                title={post.title}
                views={post.timeToRead}
                // comments={post.comments}
                likes={post.heartCount}
                time={formatDate(post.createdAt)}
                author={post.author}
                // postType={type}
                key={index}
              />
            );
          })
      )
        }
    </Container>
  );
};

export default PostList;
