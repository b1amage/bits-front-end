import axiosClient from "api/axiosClient";

const authorApi = {
	async getById(id, navigate) {
		const url = `/user/view/${id}`;
		try {
			const response = await axiosClient.get(url);
			return response;
		} catch (error) {
			console.log(error);
			// navigate to register fail
			navigate(`/error/${error.response.data.msg}`);
		}
	},
};

export default authorApi;
