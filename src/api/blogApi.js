import axiosClient from "api/axiosClient";

const blogApi = {
	async getAll(navigate) {
		const url = "/blog/view/latest";
		try {
			const response = await axiosClient.get(url);
			return response;
		} catch (error) {
			console.log(error);
			navigate(`/error/${error.response.data.msg}`);
		}
	},

	async getAllFavorite(navigate) {
		const url = "/blog/view/favorite";
		try {
			const response = await axiosClient.get(url);
			return response;
		} catch (error) {
			console.log(error);
			navigate(`/error/${error.response.data.msg}`);
		}
	},

	async getBlogsByCategory(category, type, navigate) {
		// type lastest || favorite
		let url =
			category === "all"
				? `/blog/view/${type}`
				: `/blog/view/${type}?category=${category}`;

		try {
			const response = await axiosClient.get(url);
			return response;
		} catch (error) {
			console.log(error);
			navigate(`/error/${error.response.data.msg}`);
		}
	},

	async getBlogsByTitle(title, navigate) {
		const url =
			title === "all"
				? "/blog/view/latest"
				: `/blog/view/latest?title=${title}`;
		try {
			const response = await axiosClient.get(url);
			return response;
		} catch (error) {
			console.log(error);
			navigate(`/error/${error.response.data.msg}`);
		}
	},

	async getBlogDetail(id, navigate) {
		const url = `/blog/content/${id}`;

		try {
			const response = await axiosClient.get(url);
			return response;
		} catch (error) {
			console.log(error);
			navigate(`/error/${error.response.data.msg}`);
		}
	},

	async likeBlog(id, navigate) {
		const url = `/blog/like/${id}`;

		try {
			const response = await axiosClient.put(url);
			return response;
		} catch (error) {
			console.log(error);
			navigate(`/error/${error.response.data.msg}`);
		}
	},
};

export default blogApi;
