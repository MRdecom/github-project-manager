import axios from "axios";
import {accessToken} from "./constants/constants";


const http = axios.create({
    baseURL: 'https://api.github.com'
});



// TODO header ı düzenleme yapılcak.
// Add a request interceptor
http.interceptors.request.use(function (config) {
    // Do something before request is sent
    config.headers = {...config.headers, authorization:'Bearer '+ localStorage.getItem(accessToken)} ;
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
http.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, function (error) {
    //TODO: show error
});

export default http;