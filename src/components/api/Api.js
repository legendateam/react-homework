import axios from "axios";

let option = {
  baseURL: "https://jsonplaceholder.typicode.com"
};
let axiosInstance = axios.create(option);
let getUsers = () => axiosInstance("/users");
const getUsersInfo = (id) => axiosInstance("/users/" +id)
let getPosts = (id) => axiosInstance("/posts/" +id);
export {getUsers, getUsersInfo,getPosts}