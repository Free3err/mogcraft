import apiService from "./apiService";

const isAuthorized = async () => {
    return;
};

const regUser = async (regFormData) => {
    const data = {
        username: regFormData.username,
        email: regFormData.email,
        password: regFormData.password,
    };
    const response = await apiService.postRequest("/user/sign_up", data);
    if (response.ok) {
        window.location.assign(`${process.env.REACT_APP_CLIENT_URL}/user/${response.data.user_id}`)
    }
    return response;
};

export default { isAuthorized, regUser };