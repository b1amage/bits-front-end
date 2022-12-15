import Button from "components/utilities/button/Button";
import Input from "components/utilities/form/Input";
import Select from "components/utilities/form/Select";
import topics from "content/topics";
// import Label from "components/utilities/form/Label";
// import Image from "components/utilities/image/Image";
import React, { useState } from "react";
// import defaultImg from "assets/img/default.png"
// import axios from "axios";
const SetupBlogForm = () => {
    const [category, setCategory] = useState(topics[1].value)
    // const [loading, setLoading] = useState(false)
    // const [ava, setAva] = useState(defaultImg)
    // const handleAvatarUpload = (e) => {
    //     const postImg = async () => {
    //       var bodyFormData = new FormData();
    //       bodyFormData.append("image", e.target.files[0]);
    
    //       setLoading(true);
    //       axios({
    //         method: "post",
    //         url: "/api/image/upload-image",
    //         data: bodyFormData,
    //         headers: { "Content-Type": "multipart/form-data" },
    //       })
    //         .then(function (response) {
    //           //handle success
    //           console.log(response);
    //           setAva(response.data.image.src);
    //           setLoading(false);
    //         })
    //         .catch(function (response) {
    //           //handle error
    //           console.log(response);
    //         });
    //     };
    //     postImg();
    //   };
  return (
    <div>
      <Input label="Title" fluid />
      {/*<div className="py-8">
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
      </div> */}
      <Select id="category" label={"Category"} options={topics.filter(topic => topic.value !== "all")} fluid value={category} setItems={setCategory} className='my-8' />
      <Input label="Content" fluid />
      <Button fluid primary className="my-8">Create</Button>
    </div>
  );
};

export default SetupBlogForm;
