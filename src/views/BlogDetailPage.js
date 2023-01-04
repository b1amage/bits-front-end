/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Container from "components/utilities/container/Container";
import AuthorInfo from "components/blog/AuthorInfo";
import Title from "components/utilities/text/Title";

import Image from "components/utilities/image/Image";
import BlogStats from "components/blog/BlogStats";
import BlogContent from "components/blog/BlogContent";
import blogApi from "api/blogApi";
import authorApi from "api/userApi";
import Loading from "components/loading/Loading";
import decode from "helper/decode";
import CommentCard from "components/comment/CommentCard";
import Button from "components/utilities/button/Button";
import noComment from "assets/svg/no-comment.svg";
import CommentTextArea from "../components/comment/CommentTextArea";
import sendIcon from "assets/svg/send.svg";

const BlogDetailPage = () => {
  const [blog, setBlog] = useState();
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState();
  const [author, setAuthor] = useState();
  const [comments, setComments] = useState([]);
  const [commentLoading, setCommentLoading] = useState(false);
  const [commentsNextCursor, setCommentsNextCursor] = useState(undefined);
  const [commentContent, setCommentContent] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleCommentContentChange = (e) => setCommentContent(e.target.value);

  const fetchMoreComments = async () => {
    setCommentLoading(true);
    const response = await blogApi.getComments(
      blog._id,
      commentsNextCursor,
      navigate
    );
    setComments([...comments, ...response.data.results]);
    setCommentsNextCursor(response.data.next_cursor);
    setCommentLoading(false);
  };

  useEffect(() => {
    const fetchBlogContent = async () => {
      setLoading(true);
      const response = await blogApi.getBlogDetail(id, navigate);
      setBlog(response.data.blog);
      const txt = decode(response.data.blog.content);
      setContent(txt);

      const fetchAuthor = async (res) => {
        const response = await authorApi.getById(res.data.blog.user, navigate);
        setAuthor(response.data.user);
      };

      const fetchComments = async (res) => {
        setCommentLoading(true);
        const response = await blogApi.getComments(
          res.data.blog._id,
          commentsNextCursor,
          navigate
        );
        setComments(response.data.results);
        setCommentsNextCursor(response.data.next_cursor);
        setCommentLoading(false);
      };

      fetchAuthor(response);
      fetchComments(response);
      setLoading(false);
    };

    fetchBlogContent();
  }, [id, navigate]);

  const handleLikeClick = () => {
    const likeBlog = async () => {
      const response = await blogApi.likeBlog(blog._id, navigate);
      setBlog(response.data.blog);
    };

    const unlikeBlog = async () => {
      const response = await blogApi.unlikeBlog(blog._id, navigate);
      setBlog(response.data.blog);
    };

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      navigate(
        "/error/Please sign in or sign up to continue to use this feature"
      );
      return;
    }

    const id = user.userId;

    if (blog.likes.length === 0) {
      likeBlog();
      return;
    }

    const idLikes = blog.likes.map((item) => item.user._id);

    if (idLikes.includes(id)) {
      unlikeBlog();
    } else {
      likeBlog();
    }
  };

  const handleSendIconClick = () => {
    if (!user) {
      navigate("/login");
      return;
    }

    setComments([
      ...comments,
      {
        blogId: blog._id,
        content: commentContent,
        createdAt: null,
        user,
      },
    ]);

    const sendComment = async () => {
      const response = await blogApi.addComment(
        { blogId: blog._id, content: commentContent },
        navigate
      );

      console.log(response);

      const newComment = response.data.comment;
      newComment.likes = [];

      setComments([...comments, newComment]);
    };

    sendComment();
  };

  const handleIconCommentClick = (id, liked) => {
    const likeComment = async () => {
      const response = await blogApi.likeComment(id, navigate);
      console.log(response);
      const newComments = comments.map((cmt) => {
        if (cmt._id === id) {
          cmt.heartCount = response.data.comment.heartCount;
          cmt.likes = response.data.comment.likes;
        }

        return cmt;
      });

      setComments(newComments);
    };

    const unlikeComment = async () => {
      const response = await blogApi.unLikeComment(id, navigate);
      console.log(response);

      const newComments = comments.map((cmt) => {
        if (cmt._id === id) {
          cmt.heartCount = response.data.comment.heartCount;
          cmt.likes = response.data.comment.likes;
        }

        return cmt;
      });

      setComments(newComments);
    };

    if (liked) {
      unlikeComment();
    } else {
      likeComment();
    }
  };

  const handleDeleteComment = (id) => {
    const del = async () => {
      const response = await blogApi.deleteComment(id, navigate);
      console.log(response);
      const newComments = comments.filter((item) => item._id !== id);
      setComments(newComments);
    };

    del();
  };

  const updateComment = (values) => {
    const update = async () => {
      const response = await blogApi.updateComment(values, navigate);
      console.log(response);
    };

    update();
  };

  console.log(blog);

  return (
    <Container className="flex flex-col gap-8 lg:gap-12">
      {loading ? (
        <div className="flex items-center justify-center min-h-[80vh]">
          <Loading />
        </div>
      ) : (
        <>
          {/* Blog author's info */}
          <AuthorInfo
            authorId={blog?.user}
            readTime={blog?.timeToRead}
            name={author?.username}
            userImg={author?.avatar}
          />

          {/* Title */}
          <Title className="!text-3xl md:!text-4xl lg:!text-6xl">
            {blog?.title}
          </Title>

          <div className="flex flex-col gap-4 md:w-4/5 lg:w-full md:mx-auto md:gap-6">
            {/* Banner */}
            {blog?.banner !== "default" && (
              <Image
                src={blog?.banner}
                alt="blog banner"
                className="overflow-hidden rounded-lg lg:w-[800px]"
              />
            )}

            {/* Stats */}
            <BlogStats likeCount={blog?.heartCount} onLike={handleLikeClick} />
          </div>

          {/* Content */}
          <BlogContent content={content} />

          {/* Comments */}
          <div>
            <Title className="my-5 md:my-8 lg:my-10">Comments</Title>
            <div className="flex flex-col gap-5 md:gap-8 lg:gap-10">
              {comments.length === 0 ? (
                <div className="mx-auto">
                  <Image src={noComment} className="mx-auto lg:w-1/2" />
                  <Title className="!my-10">
                    Be the first one to comment on this post
                  </Title>
                </div>
              ) : (
                comments.map((item, idx) => (
                  <CommentCard
                    onUpdate={updateComment}
                    onDelete={handleDeleteComment}
                    comment={item}
                    key={idx}
                    onLike={handleIconCommentClick}
                  />
                ))
              )}
            </div>

            {commentLoading && (
              <div className="my-10">
                <Loading />
              </div>
            )}

            {commentsNextCursor !== null && (
              <Button onClick={fetchMoreComments} className="my-10" primary>
                More comment
              </Button>
            )}
          </div>

          {/* Comments textarea */}
          <CommentTextArea
            id="comment-textarea"
            icon={sendIcon}
            onIconClick={handleSendIconClick}
            onChange={handleCommentContentChange}
          />
        </>
      )}
    </Container>
  );
};

export default BlogDetailPage;
