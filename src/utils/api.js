import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:5000/api/v1",
});

http.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    if (!!localStorage.getItem("tm_auth_token")) {
      config.headers.Authorization = localStorage.getItem("tm_auth_token");
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
export default http;
