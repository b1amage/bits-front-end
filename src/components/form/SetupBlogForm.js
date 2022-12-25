import Button from "components/utilities/button/Button";
import Input from "components/utilities/form/Input";
import Select from "components/utilities/form/Select";
import topics from "content/topics";
import Label from "components/utilities/form/Label";
import Image from "components/utilities/image/Image";
import React, { useState } from "react";
import defaultImg from "assets/img/default.png";
import axios from "axios";
import Error from "components/utilities/form/Error";
import { encode } from "html-entities";
import blogApi from "api/blogApi";
import { useNavigate } from "react-router-dom";
import EditorForm from "components/editor/Editor";
import DOMPurify from "dompurify";

const SetupBlogForm = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [err, setErr] = useState();
  const [loading, setLoading] = useState(false);
  const [ava, setAva] = useState(defaultImg);
  const [convertedContent, setConvertedContent] = useState("");
  const [preview, setPreview] = useState(false);
  const navigate = useNavigate();

  const createMarkup = (html) => {
    console.log(html);
    return {
      __html: DOMPurify.sanitize(html),
    };
  };
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
          setAva(response.data.image.src);
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
    if (title === "" || category === "") {
      setErr("Please fill in title or category!");
    } else {
      console.log({
        title: title,
        banner: ava,
        category: category,
        content: encode(convertedContent),
      });
      blogApi.createBlog(
        {
          title: title,
          banner: ava,
          category: category,
          content: encode(convertedContent),
        },
        navigate,
        setErr
      );
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <Input label="Title" fluid onChange={(e) => setTitle(e.target.value)} />
      <div className="py-8">
        <label htmlFor="avatar">
          <Label children={"Banner"} />
          <Image
            src={ava}
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
      <Select
        id="category"
        label={"Category"}
        options={topics.filter((topic) => topic.value !== "all")}
        fluid
        value={category}
        setItems={setCategory}
        className="my-8"
      />
      {err && <Error children={err} fluid />}

      <div>
        <div className="flex justify-between items-center pb-4">
          <Label>Content</Label>

          <Button
            className="!min-w-[100px]"
            onClick={() => setPreview((state) => !state)}
            primary={preview ? true : false}
          >
            Preview
          </Button>
        </div>

        {preview ? (
          <div
            className="max-h-[50vh] h-full flex flex-col w-full py-4 overflow-y-scroll"
            dangerouslySetInnerHTML={createMarkup(convertedContent)}
          ></div>
        ) : (
          <EditorForm
            content={convertedContent}
            setConvertedContent={setConvertedContent}
            className={"!max-h-[50vh]"}
          />
        )}
      </div>
      <Button type="submit" fluid primary className="my-8">
        Create
      </Button>
    </form>
  );
};

export default SetupBlogForm;
