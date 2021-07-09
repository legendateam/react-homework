import axios from "axios";

let basUrl = {
    baseURL: "https://jsonplaceholder.typicode.com"
};
let axiosInstance = axios.create(basUrl);
const getPosts = () => axiosInstance("/posts");
const getPost = (id) => axiosInstance("/posts/" +id);
export {getPosts, getPost}