import axios from "axios";
import CookieService from "./CookieService";

export default axios.create({
    baseURL: "http://localhost:4001/api",
    headers: {
        "Content-type": "application/json",
        'token': CookieService.getCookie('token'),
    },
    withCredentials: true
});
