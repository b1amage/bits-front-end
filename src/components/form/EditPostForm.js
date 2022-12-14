import blogApi from "api/blogApi";
import axios from "axios";
import EditorForm from "components/editor/Editor";
import Loading from "components/loading/Loading";
import Button from "components/utilities/button/Button";
import Input from "components/utilities/form/Input";
import Image from "components/utilities/image/Image";
import decode from "helper/decode";
import defaultImg from "assets/img/default.png";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Label from "components/utilities/form/Label";
import topics from "content/topics";

const EditPostForm = () => {
  // const navigate = useNavigate()
  const { blogId } = useParams();
  const [content, setContent] = useState("");
  const [title, setTitle] = useState();
  const [banner, setBanner] = useState();
  const [category, setCategory] = useState();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    const getBlogDetail = async () => {
      setLoading(true);
      const response = await blogApi.getBlogDetail(blogId, navigate);
      console.log(response);
      setTitle(response.data.blog.title);
      setBanner(response.data.blog.banner);
      setContent(decode(response.data.blog.content));
      setCategory(response.data.blog.category);
      setLoading(false);
    };
    getBlogDetail();
  }, [blogId, navigate]);

  const handleAvatarUpload = (e) => {
    const postImg = async () => {
      var bodyFormData = new FormData();
      bodyFormData.append("image", e.target.files[0]);

      setLoading(true);
      axios({
        method: "post",
        url: "/api/image/upload-image",
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then(function (response) {
          //handle success
          console.log(response);
          setBanner(response.data.image.src);
          setLoading(false);
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });
    };

    postImg();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(content);
  };
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            label="Title"
            fluid
          />
          <div className="py-8">
            <label htmlFor="avatar">
              <Label children={"Banner"} />
              <Image
                src={banner === "default" ? defaultImg : banner}
                className={`rounded-full md:w-[200px] md:h-[200px] w-[100px] h-[100px] mx-auto my-10 hover:brightness-75 transition-all duration-200 ${
                  loading && "animate-pulse"
                }`}
              />
            </label>

            <input
              onChange={handleAvatarUpload}
              type="file"
              name="avatar"
              id="avatar"
              className="hidden"
            />
          </div>

          <select
            value={category}
            className="w-full px-4 py-3 text-sm transition-all duration-300 outline-none rounded-2xl bg-secondary-50 md:text-base md:px-6 md:py-4 focus:border-primary-100 placeholder:text-secondary-100"
          >
            {topics.length > 0 &&
              topics.map((topic, index) => {
                return (
                  <option key={index} value={topic.value}>
                    {topic.value}
                  </option>
                );
              })}
          </select>
          <div className="py-8">
            <Label children="Content" />
            <EditorForm content={content} setConvertedContent={setContent} />
          </div>
          <Button type="submit" primary fluid>
            Update
          </Button>
        </form>
      )}
    </>
  );
};

export default EditPostForm;
