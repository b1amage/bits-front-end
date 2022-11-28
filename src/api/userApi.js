const { default: axiosClient } = require("./axiosClient")

const userApi = {
    async getUserProfile(userId){
        const url = `user/view/${userId}`
        try{
            const response = await axiosClient.get(url, {
                withCredentials: true
            });
            console.log(response);
            return response;
        } catch(err){
            console.log(err.response)
        }
    }
}

export default userApi;