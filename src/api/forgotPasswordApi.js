const { default: axiosClient } = require("./axiosClient");

const forgotPasswordApi = {
  async forgotPassword(email) {
    try {
      const url = `/auth/forgot-password`;
      const response = await axiosClient.post(url, { email: email });
      return response;
    } catch (err) {
      console.log(err);
      return err.response;
    }
  },

  async resetPassword(newPassword, token, navigate) {
    try {
      const url = `/auth/reset-password`;
      const response = await axiosClient.post(
        url,
        { verificationToken: token, newPassword: newPassword },
        { withCredentials: true }
      );
      console.log(response);
      navigate('/')
      return response;
    } catch (err) {
      console.log(err);
      return err.response;
    }
  },
};

export default forgotPasswordApi;
