import authorApi from "api/userApi";
import Button from "components/utilities/button/Button";
import Input from "components/utilities/form/Input";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditProfileForm = () => {
  const { userId } = useParams();
  const [name, setName] = useState();
  const [biography, setBiography] = useState();

  useEffect(() => {
    const getUser = async () => {
      const response = await authorApi.getById(userId);
      console.log(response);
      setName(response.data.user.username);
    //   setAva(response.data.user.avatar);
      setBiography(response.data.user.biography);
    };
    getUser();
  }, [userId]);

  return (
    <form>
      <Input
        label="Username"
        fluid
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      
      <Input
        label="Biography"
        fluid
        type="text"
        value={biography}
        onChange={(e) => setBiography(e.target.value)}
      />

      <Button primary fluid className="my-8">
        Update profile
      </Button>
    </form>
  );
};

export default EditProfileForm;
