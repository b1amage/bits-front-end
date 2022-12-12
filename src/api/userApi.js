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
	async updateProfile(values, navigate){
		const url = `/user/edit`
		try{
			const response = await axiosClient.put(url, values, {
				withCredentials:true
			});
			navigate(-1)
			console.log(response);
		} catch(err){
			console.log(err.response)
		}
	}
};

export default authorApi;