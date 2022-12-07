import React, { useEffect, useState } from "react";
import posts from "../../content/posts";
import PostCard from "components/post/PostCard";
import PostListNavBar from "components/post/PostListNavBar";
import blogApi from "api/blogApi";
import Loading from "components/loading/Loading";

const PostList = () => {
  const [type, setType] = useState("post");
  const [userBlogs, setUserBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
      console.log(response.data.results);
      setUserBlogs(response.data.results);
      setIsLoading(false);
    };

    allUserBlogs();
  }, []);

  return (
    <div
      className={`2xl:max-w-full rounded-t-3xl bg-white flex flex-col justify-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-48 2xl:px-60`}
    >
      <PostListNavBar current={type} setType={setType} />

      {/* return the list of posts that user has posted on if the path contain /post or nothing */}
      {isLoading ? (
        <Loading />
      ) : type == null || type === "post" ? (
        userBlogs
          .filter(
            (post) =>
              post.user.username ===
              JSON.parse(localStorage.getItem("user")).name
          )
          .map((post, index) => {
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
                postType={type}
                key={index}
              />
            );
          })
      ) : type === "latest" ? ( // return all posts shared in the app from the newest to the oldest if the route contain /latest
        posts.map((post, index) => {
          return (
            <PostCard
              blogId={post._id}
              thumbnail={post.thumbnail}
              title={post.title}
              views={post.views}
              comments={post.comments}
              likes={post.likes}
              time={post.time}
              author={post.author}
              postType={type}
              key={index}
            />
          );
        })
      ) : (
        posts
          .filter((post) => post.isLiked) // return all posts that user has liked when the route contain /liked
          .map((post, index) => {
            return (
              <PostCard
                blogId={post._id}
                thumbnail={post.thumbnail}
                title={post.title}
                views={post.views}
                comments={post.comments}
                likes={post.likes}
                time={post.time}
                author={post.author}
                postType={type}
                key={index}
              />
            );
          })
      )}
    </div>
  );
};

export default PostList;
