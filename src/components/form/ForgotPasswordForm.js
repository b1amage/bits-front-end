import forgotPasswordApi from "api/forgotPasswordApi";
import Button from "components/utilities/button/Button";
import Input from "components/utilities/form/Input";
import Text from "components/utilities/text/Text";
import { useState } from "react";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState();
  const [msg, setMsg] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await forgotPasswordApi.forgotPassword(email);
    setMsg(response.data.msg);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-16 md:justify-evenly"
    >
      <Input
        fluid
        label={"Email"}
        className={"h-12 lg:h-14 xl:h-16 2xl:h-20"}
        onChange={(e) => setEmail(e.target.value)}
      />
      {msg && <Text children={msg} className="text-center" />}
      <Button
        children={"Submit"}
        className={"h-12 lg:h-14 xl:h-16 2xl:h-20"}
        primary
        animate
        type="submit"
      />
    </form>
  );
};

export default ForgotPasswordForm;
