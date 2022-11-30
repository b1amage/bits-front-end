import axiosClient from "api/axiosClient";

const authenticationApi = {
	async register(account, navigate) {
		const url = "/auth/register";
		try {
			const response = await axiosClient.post(url, account);
			console.log(response);
			return response;
		} catch (error) {
			console.log(error);
			// navigate to register fail
			navigate(`/error/${error.response.data.msg}`);
		}
	},

	async verifyToken(query, setError) {
		try {
			const response = await axiosClient.post("/auth/verify-email", {
				verificationToken: query.get("token"),
			});

			console.log(response);
			return response.data;
		} catch (error) {
			console.log(error.response);
			setError(true);
		}
	},
};

export default authenticationApi;
