import axios from "axios";

let option = {
    baseURL: "https://jsonplaceholder.typicode.com"
};

let axiosInstance = axios.create(option);
let getUsers = () => axiosInstance("/users");
let getPosts = () => axiosInstance("/posts");
let getComments = () => axiosInstance("/comments");

export {getUsers, getComments, getPosts}