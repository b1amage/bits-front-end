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

	async getBlogsByCategory(category, type) {
		// type lastest || favorite
		const url = `/blog/view/${type}?category=${category}`;
		try {
			const response = await axiosClient.get(url);
			return response;
		} catch (error) {
			console.log(error);
			// navigate to register fail
			// navigate(`/error/${error.response.data.msg}`);
		}
	},

	async getBlogsByTitle(title) {
		const url =
			title === "all"
				? "/blog/view/latest"
				: `/blog/view/latest?title=${title}`;
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
