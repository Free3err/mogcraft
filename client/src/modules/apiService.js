import axios from "axios";

const API_URL = process.env.REACT_APP_API;

const getRequest = async (api_url, params = {}) => {
    try {
        const response = await axios.get(`${API_URL}${api_url}`, {
            params,
        });
        return response.data;
    } catch (error) {
        return {
            ok: false,
            stack: error,
            shortError: "Invalid GET request",
        };
    }
};

const postRequest = async (
    api_url,
    body = {},
    headers = { "Content-Type": "application/json" }
) => {
    try {
        const response = await axios.post(`${API_URL}${api_url}`, body, {
            headers,
        });
        return response.data;
    } catch (error) {
        return {
            ok: false,
            stack: error,
            shortError: "Invalid POST request",
        };
    }
};

export default { getRequest, postRequest };
