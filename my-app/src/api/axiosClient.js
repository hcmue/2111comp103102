import axios from "axios";

export const axiosClient = () => {
    const axiosInstance = axios.create({
        baseURL: process.env.REACT_APP_API,
        headers: { 'Content-Type': 'application/json' }
    });

    axiosInstance.interceptors.request.use(
        (config) => {
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    axiosInstance.interceptors.response.use(function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    }, function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    });

    return axiosInstance;
};