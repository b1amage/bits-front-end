import axiosClient from "api/axiosClient";

const blogApi = {
	async getAll(navigate) {
		const url = "/blog/view/latest";
		try {
			const response = await axiosClient.get(url);
			return response;
		} catch (error) {
			console.log(error);
			// navigate to register fail
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
			// navigate to register fail
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
			// navigate to register fail
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
			// navigate to register fail
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

	async getComments(id, nextCursor, navigate) {
		const url = !nextCursor
			? `/comment/view/${id}`
			: `/comment/view/${id}?next_cursor=${nextCursor}`;

		try {
			const response = await axiosClient.get(url);
			return response;
		} catch (error) {
			console.log(error);
			navigate(`/error/${error.response.data.msg}`);
		}
	},

	async addComment(values, navigate) {
		const url = `/comment/create`;

		try {
			const response = await axiosClient.post(url, values, {
				withCredentials: true,
			});
			return response;
		} catch (error) {
			console.log(error);
			navigate(`/error/${error.response.data.msg}`);
		}
	},
	async getUserBlogs(category = "", title = "", nextCursor = "") {
		try {
			const url = `/blog/user?category=${category}&&title=${title}&&next_cursor=${nextCursor}`;
			const response = await axiosClient.get(url);
			console.log(response);
			return response;
		} catch (err) {
			console.log(err);
		}
	},
	async deleteBlog(blogId){
		try{
			const url = `/blog/delete/${blogId}`
			const response = await axiosClient.delete(url);
			console.log(response.data.msg)
			return response
		} catch(err){
			console.log(err)
		}
	}
};

export default blogApi;
