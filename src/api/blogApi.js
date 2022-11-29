import axiosClient from "api/axiosClient";

const blogApi = {
	async getAll() {
		const url = "/blog/view/latest";
		try {
			const response = await axiosClient.get(url);
			return response;
		} catch (error) {
			console.log(error);
			// navigate to register fail
			// navigate(`/error/${error.response.data.msg}`);
		}
	},

	async getAllFavorite() {
		const url = "/blog/view/favorite";
		try {
			const response = await axiosClient.get(url);
			return response;
		} catch (error) {
			console.log(error);
			// navigate to register fail
			// navigate(`/error/${error.response.data.msg}`);
		}
	},
};

export default blogApi;
