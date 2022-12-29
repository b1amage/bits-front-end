import { useEffect, useState } from "react";
import Container from "components/utilities/container/Container";
import CMSBanner from "../components/dashboard/CMSBanner";
import Blog from "components/blog/Blog";
import ScrollContainer from "components/utilities/container/ScrollContainer";
import Category from "components/category/Category";
import topics from "content/topics";
import Button from "components/utilities/button/Button";
import loginApi from "api/loginApi";
import { useNavigate } from "react-router-dom";
import blogApi from "api/blogApi";
import DashboardSearchBox from "components/search/DashboardSearchBox";
import Loading from "components/loading/Loading";
import Title from "components/utilities/text/Title";

const DashboardPage = () => {
  // const [blogs, setBlogs] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("");
  const [currentSearch, setCurrentSearch] = useState("");
  const [userBlogs, setUserBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [nextCursor, setNextCursor] = useState();
  const [loadMore, setLoadMore] = useState(false);

  const navigate = useNavigate();
  // const [blogList] = useDebounce(userBlogs, 2000);

  // check if user has logged in
  useEffect(() => {
    if (
      loginApi.isLogin() === null ||
      !JSON.parse(localStorage.getItem("user")).userId
    ) {
      navigate("/login", { replace: true });
    }
  }, [navigate]);

  const [values, setValues] = useState({
    userId:
      localStorage.getItem("user") &&
      JSON.parse(localStorage.getItem("user")).userId,
    currentCategory: "",
    currentSearch: "",
  });

  const handleChange = (e) => {
    setCurrentSearch(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setValues({
      userId:
        localStorage.getItem("user") &&
        JSON.parse(localStorage.getItem("user")).userId,
      currentCategory: currentCategory,
      currentSearch: currentSearch,
    });
  };

  // check if current category value is "All"
  useEffect(() => {
    if (currentCategory === "all") {
      setCurrentCategory("");
    }
  }, [currentCategory]);

  // render blogs based one category and search
  useEffect(() => {
    const allUserBlogs = async () => {
      setIsLoading(true);
      const response = await blogApi.getUserBlogs(values);
      setUserBlogs(response.data.results);
      setNextCursor(response.data.next_cursor);
      setIsLoading(false);
    };

    allUserBlogs();
  }, [values]);

  const handleViewMoreBlogs = async () => {
    setLoadMore(true);
    const response = await blogApi.getUserBlogs(values, nextCursor);
    setUserBlogs([...userBlogs, ...response.data.results]);
    setNextCursor(response.data.next_cursor);
    setLoadMore(false);
  };

  const handleCategoryClick = (e) => {
    // set current category (add css)
    const { id } = e.target;
    setCurrentCategory(id);

    id === "all"
      ? setValues({
          userId:
            localStorage.getItem("user") &&
            JSON.parse(localStorage.getItem("user")).userId,
          currentCategory: "",
          currentSearch: currentSearch,
        })
      : setValues({
          userId:
            localStorage.getItem("user") &&
            JSON.parse(localStorage.getItem("user")).userId,
          currentCategory: e.target.id,
          currentSearch: currentSearch,
        });

    // call API get blog by category
    // set blogs to data.results
  };

  // format datetime in month day, year
  const formatDate = (strDateTime) => {
    var options = { day: "numeric", month: "long", year: "numeric" };
    return new Date(strDateTime).toLocaleDateString([], options);
  };

  return (
    <Container className="relative flex flex-col">
      <CMSBanner
        username={
          localStorage.getItem("user") !== null &&
          JSON.parse(localStorage.getItem("user")).name
        }
      />

      <DashboardSearchBox
        className="mt-10 mb-2"
        handleChange={handleChange}
        handleSearch={handleSearch}
      />

      <ScrollContainer className="mb-10">
        {topics.length > 0 &&
          topics.map((item, index) => (
            <Category
              isActive={item.value === currentCategory}
              id={item.value}
              onClick={handleCategoryClick}
              key={index}
            >
              {item.value}
            </Category>
          ))}
      </ScrollContainer>

      <div>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 md:grid-cols-2 place-items-center md:place-items-start">
          {isLoading ? (
            <div className="col-start-2 col-end-2 w-full text-center">
              <Loading />
            </div>
          ) : userBlogs.length > 0 ? (
            userBlogs.map((item, index) => (
              <Blog
                editable
                blogId={item._id}
                likeCount={item.heartCount}
                key={index}
                img={item.banner !== "default" && item.banner}
                author={item.user.username}
                date={formatDate(item.user.createdAt)}
                title={item.title}
                topic={item.category}
              />
            ))
          ) : (
            <Title className="col-start-2 col-end-2 w-full text-center">
              No blogs found!
            </Title>
          )}

          {userBlogs
            .filter((blog) => !userBlogs.includes(blog))
            .map((item, index) => {
              return (
                <Blog
                  editable
                  blogId={item._id}
                  likeCount={item.heartCount}
                  key={index}
                  img={item.banner !== "default" && item.banner}
                  author={item.user.username}
                  date={formatDate(item.user.createdAt)}
                  title={item.title}
                  topic={item.category}
                />
              );
            })}
          {/* {loadMore ? (
            <Loading />
          ) : (
            userBlogs
              .filter((blog) => !userBlogs.includes(blog))
              .map((item, index) => {
                return (
                  <Blog
                    editable
                    blogId={item._id}
                    likeCount={item.heartCount}
                    key={index}
                    img={item.banner !== "default" && item.banner}
                    author={item.user.username}
                    date={formatDate(item.user.createdAt)}
                    title={item.title}
                    topic={item.category}
                  />
                );
              })
          )} */}
        </div>

        {loadMore && <Loading />}
      </div>

      {!isLoading && (
        <Button
          primary
          className={`my-8 !w-full ${nextCursor === null ? "hidden" : ""}`}
          onClick={handleViewMoreBlogs}
        >
          More
        </Button>
      )}
      <Button
        onClick={() => navigate("/post/setup")}
        isRound
        primary
        className="!w-[75px] !h-[75px] !text-5xl fixed bottom-4 left-1/2 -translate-x-1/2"
      >
        +
      </Button>
    </Container>
  );
};

export default DashboardPage;
