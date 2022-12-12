import authorApi from "api/userApi";
import axios from "axios";
import Button from "components/utilities/button/Button";
import Input from "components/utilities/form/Input";
import Image from "components/utilities/image/Image";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import defaultImg from "assets/img/default.png"
import Label from "components/utilities/form/Label";

const EditProfileForm = () => {
  const { userId } = useParams();
  const [name, setName] = useState();
  const [biography, setBiography] = useState();
  const [ava, setAva] = useState(defaultImg)
  // const [values, setValues] = useState({
  //   name: "",
  //   biography: "",
  //   ava: ""
  // })
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getUser = async () => {
      const response = await authorApi.getById(userId);
      console.log(response);
      setName(response.data.user.username);
        setAva(response.data.user.avatar);
      setBiography(response.data.user.biography);
    };
    getUser();
  }, [userId]);

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
    e.preventDefault()
    // console.log(name)
    // console.log(biography)
    // console.log(ava)

    // setValues({
    //   name: name,
    //   biography: biography,
    //   ava: ava
    // })
    authorApi.updateProfile({
      username: name,
      avatar: ava,
      biography: biography, 
    }, navigate)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Username"
        fluid
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <div className="my-8">
        <label htmlFor="avatar">
          <Label children="Avatar" />
          <Image
            src={ava}
            className={`rounded-full md:w-[400px] md:h-[400px] w-[200px] h-[200px] mx-auto my-10 hover:brightness-75 transition-all duration-200 ${
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

      <Input
        label="Biography"
        fluid
        type="text"
        value={biography}
        onChange={(e) => setBiography(e.target.value)}
      />

      <Button type="submit" primary fluid className="my-8">
        Update profile
      </Button>
    </form>
  );
};

export default EditProfileForm;
