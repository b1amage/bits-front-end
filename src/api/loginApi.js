const { default: axiosClient } = require("./axiosClient");

const loginApi = {
    async login(values, navigate){
        const url = "/auth/login";
        try{
            const response = await axiosClient.post(url, values);
            console.log(response);
            localStorage.setItem("user", JSON.stringify(response.data.user));
            navigate("/")
        } catch(err){
            console.log(err.response.data);
        }
    }
}

export default loginApi;