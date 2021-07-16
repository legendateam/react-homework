import axios from "axios";

let baseOption = {
    baseURL: "https://jsonplaceholder.typicode.com"
};
let axiosInstance = axios.create(baseOption);
let getUsers = () => axiosInstance("/users");
let getPosts = () => axiosInstance("/posts");
let getComments = () => axiosInstance("/comments");
let getPostsId = (id) => axiosInstance("/posts/" + id)
let getCommentsId = (id) => axiosInstance("/comments/" + id)

export {getUsers, getPosts, getComments, getPostsId, getCommentsId}
