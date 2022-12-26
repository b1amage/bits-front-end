const { default: axiosClient } = require("./axiosClient");

const loginApi = {
    async login(values, navigate, setError){
        const url = "/auth/login";
        try{
            const response = await axiosClient.post(url, values, {
                withCredentials: true
            });
            console.log(response);
            localStorage.setItem("user", JSON.stringify(response.data.user));
            navigate("/", {replace: true})
            return response
        } catch(err){
            console.log(err.response.data);
            setError(err.response.data.msg);
        }
    },

    isLogin() {
		return localStorage.getItem("user");
	},
}

export default loginApi;
