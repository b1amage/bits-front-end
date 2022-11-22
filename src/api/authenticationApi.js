import axiosClient from "api/axiosClient";

const authenticationApi = {
	async register(account) {
		const url = "/auth/register";
		try {
			const response = await axiosClient.post(url, account);
			console.log(response);
			return response;
		} catch (error) {
			console.log(error);
			// navigate to register fail
			// navigate(`/error/${error.response.data.msg}`);
		}
	},
};

export default authenticationApi;
