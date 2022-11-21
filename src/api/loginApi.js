const { default: axiosClient } = require("./axiosClient");

const loginApi = {
    async login(values, navigate){
        const url = "/auth/login";
        try{
            const response = axiosClient.post(url, values);
            console.log(response.data);
            // navigate("/")
        } catch(err){
            console.log(err);
        }
    }
}

export default loginApi;