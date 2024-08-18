import axios from "axios";

export default function getPageData(path) {
    return axios
        .get(
            `http://localhost:5000/api/pages/get_data?path=${encodeURIComponent(
                path
            )}`
        )
        .then(response => response.data.text)
}
