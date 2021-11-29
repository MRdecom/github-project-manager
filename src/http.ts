import axios from "axios";
import {accessToken} from "./constants/constants";


const http = axios.create({
    baseURL: 'https://api.github.com'
});

http.interceptors.request.use(function (config) {
    config.headers = {...config.headers, authorization:'Bearer '+ localStorage.getItem(accessToken)} ;
    return config;
}, function (error) {
    return Promise.reject(error);
});

http.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    //TODO: show error
    alert(JSON.stringify(error))
});

export default http;