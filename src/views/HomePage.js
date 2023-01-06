import { useState, useEffect } from "react";
import Container from "components/utilities/container/Container";
import SearchBox from "components/search/SearchBox";
import ScrollContainer from "components/utilities/container/ScrollContainer";
import Category from "components/category/Category";
import blogBg from "assets/svg/blog-bg.svg";
import Image from "components/utilities/image/Image";
import Title from "components/utilities/text/Title";
import FeatureBlog from "components/blog/FeatureBlog";
import Blog from "components/blog/Blog";
import topics from "content/topics";
import blogApi from "api/blogApi";
import Loading from "components/loading/Loading";
import { useNavigate } from "react-router-dom";
// import Button from "components/utilities/button/Button";
import defaultImg from "assets/img/default.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import useViewport from "../hooks/useViewport";

const HomePage = () => {
  const [blogs, setBlogs] = useState([]);
  const [favBlogs, setFavBlogs] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [favLoading, setFavLoading] = useState(false);
  const [nextCursor, setNextCursor] = useState(undefined);
  const [nextCursorFav, setNextCursorFav] = useState(undefined);

  const navigate = useNavigate();
  // const { width } = useViewport();

  const handleViewMoreBlog = () => {
    const viewMore = async () => {
      // setLoading(true);
      const response = await blogApi.getAll(nextCursor, navigate);
      setBlogs([...blogs, ...response.data.results]);
      setNextCursor(response.data.next_cursor);
      // setLoading(false);
    };

    viewMore();
  };

  const handleViewMoreFavBlog = () => {
    const viewMore = async () => {
      const response = await blogApi.getAllFavorite(nextCursorFav, navigate);
      const newFavBlog = [...favBlogs, ...response.data.results];

      setFavBlogs(newFavBlog);
      setNextCursorFav(response.data.next_cursor);
    };

    viewMore();
  };

  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true);
      const response = await blogApi.getAll(nextCursor, navigate);
      setBlogs(response.data.results);
      setNextCursor(response.data.next_cursor);
      setLoading(false);
    };

    fetchBlog();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate]);

  useEffect(() => {
    const fetchFavBlog = async () => {
      setFavLoading(true);
      const response = await blogApi.getAllFavorite(nextCursorFav, navigate);
      setFavBlogs(response.data.results);
      setNextCursor(response.data.next_cursor);
      setFavLoading(false);
    };

    fetchFavBlog();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate]);

  const handleCategoryClick = (e) => {
    const fetchBlogByCategory = async () => {
      setLoading(true);
      const responseFavBlog = await blogApi.getBlogsByCategory(
        e.target.id,
        "favorite",
        navigate
      );

      const responseBlog = await blogApi.getBlogsByCategory(
        e.target.id,
        "latest",
        navigate
      );

      setFavBlogs(responseFavBlog.data.results);
      setBlogs(responseBlog.data.results);
      setLoading(false);
    };

    // set current category (add css)
    setCurrentCategory(e.target.id);
    // call API get blog by category
    fetchBlogByCategory();
  };
  return (
    <Container>
      <SearchBox />

      {/* Category list */}

      <ScrollContainer className="my-4 scrollbar-hidden">
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

      {/* Feature Blogs */}
      <section className="my-8">
        <Title>Feature</Title>
        <div className="my-10">
          <Swiper
            spaceBetween={20}
            slidesPerView="auto"
            // slidesPerView={width < 1200 ? 1 : width < 1500 ? 2 : 3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            grabCursor={true}
            onReachEnd={() => {
              if (nextCursorFav !== null) {
                handleViewMoreFavBlog();
              }
            }}
          >
            {favLoading ? (
              <Loading />
            ) : (
              <>
                {favBlogs?.length > 0 &&
                  favBlogs.map((blog, index) => (
                    <SwiperSlide key={index}>
                      <div
                        key={index}
                        className="relative flex w-full lg:w-[400px] lg:h-[400px] scroll-item"
                      >
                        <Image
                          src={blogBg}
                          alt="feature blog background"
                          className="w-full"
                        />

                        <FeatureBlog
                          blogId={blog._id}
                          className="absolute -translate-x-1/2 bottom-10 left-1/2"
                          name={blog.user.username}
                          readTime={blog.timeToRead}
                          title={blog.title}
                          userAvatar={blog.user.avatar}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
              </>
            )}
          </Swiper>
        </div>

        {/* <ScrollContainer className="my-2 md:!gap-4 lg:!gap-5">
          {loading ? (
            <Loading />
          ) : (
            <>
              {favBlogs?.length > 0 &&
                favBlogs.map((blog, index) => (
                  <SwiperSlide key={index}>
                    <div
                      key={index}
                      className="relative flex w-full md:w-[400px] md:h-[400px] scroll-item"
                    >
                      <Image
                        src={blogBg}
                        alt="feature blog background"
                        className="w-full"
                      />

                      <FeatureBlog
                        blogId={blog._id}
                        className="absolute -translate-x-1/2 bottom-10 left-1/2"
                        name={blog.user.username}
                        readTime={blog.timeToRead}
                        title={blog.title}
                        userAvatar={blog.user.avatar}
                      />
                    </div>
                  </SwiperSlide>
                ))}

              {nextCursorFav !== null && (
                <Button
                  onClick={handleViewMoreFavBlog}
                  className="md:w-[400px] md:h-[400px] scroll-item !text-3xl"
                >
                  Load more
                </Button>
              )}
            </>
          )}
        </ScrollContainer> */}
      </section>

      {/* Blog */}
      <section className="my-8 select-none">
        <Title>Lastest</Title>
        <div className="my-10">
          <Swiper
            spaceBetween={20}
            slidesPerView="auto"
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            grabCursor={true}
            onReachEnd={() => {
              if (nextCursor !== null) {
                handleViewMoreBlog();
              }
            }}
          >
            {loading ? (
              <Loading />
            ) : (
              <>
                {blogs?.length > 0 &&
                  blogs.map((blog, index) => (
                    <SwiperSlide key={index}>
                      <Blog
                        blogId={blog._id}
                        key={index}
                        author={blog.user.username}
                        likeCount={blog.heartCount}
                        date={blog.createdAt.slice(0, 10)}
                        className="scroll-item max-w-[90%]"
                        title={blog.title}
                        img={
                          blog.banner === "default" ? defaultImg : blog.banner
                        }
                      />
                    </SwiperSlide>
                  ))}
              </>
            )}
          </Swiper>
        </div>

        {/* <ScrollContainer className="my-2 md:!gap-4 lg:!gap-5">
          {loading ? (
            <Loading />
          ) : (
            <>
              {favBlogs?.length > 0 &&
                favBlogs.map((blog, index) => (
                  <SwiperSlide key={index}>
                    <div
                      key={index}
                      className="relative flex w-full md:w-[400px] md:h-[400px] scroll-item"
                    >
                      <Image
                        src={blogBg}
                        alt="feature blog background"
                        className="w-full"
                      />

                      <FeatureBlog
                        blogId={blog._id}
                        className="absolute -translate-x-1/2 bottom-10 left-1/2"
                        name={blog.user.username}
                        readTime={blog.timeToRead}
                        title={blog.title}
                        userAvatar={blog.user.avatar}
                      />
                    </div>
                  </SwiperSlide>
                ))}

              {nextCursorFav !== null && (
                <Button
                  onClick={handleViewMoreFavBlog}
                  className="md:w-[400px] md:h-[400px] scroll-item !text-3xl"
                >
                  Load more
                </Button>
              )}
            </>
          )}
        </ScrollContainer> */}
      </section>
      {/* <section>
        <Title>Blogs</Title>
        <ScrollContainer className="my-2 md:!gap-4 lg:!gap-5">
          {loading ? (
            <Loading />
          ) : (
            <>
              {blogs.length > 0 &&
                blogs.map((blog, index) => (
                  <Blog
                    blogId={blog._id}
                    key={index}
                    author={blog.user.username}
                    likeCount={blog.heartCount}
                    readCount={912}
                    date={blog.createdAt.slice(0, 10)}
                    className="scroll-item max-w-[90%]"
                    title={blog.title}
                    img={blog.banner === "default" ? defaultImg : blog.banner}
                  />
                ))}

              {nextCursor !== null && (
                <Button
                  onClick={handleViewMoreBlog}
                  className="scroll-item min-w-[320px] md:min-w-[380px]"
                >
                  Load more
                </Button>
              )}
            </>
          )}
        </ScrollContainer>
      </section> */}
    </Container>
  );
};

export default HomePage;
