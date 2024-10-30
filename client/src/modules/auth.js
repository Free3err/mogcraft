import apiService from "./apiService";

const isAuthorized = () => {
    return;
};

const regUser = (regFormData) => {
    const data = {
        username: regFormData.username,
        email: regFormData.email,
        password: regFormData.password,
    };
    apiService.postRequest("/user/sign_up", data);
};

export default { isAuthorized, regUser };