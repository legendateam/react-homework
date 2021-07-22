const axios = require("axios");
let option = {
    baseURL: "https://jsonplaceholder.typicode.com"
};

let  axiosInstance = axios.create(option);
let getUsers = () => axiosInstance("/users");
let getAllPosts = (id) => axiosInstance("/posts/" +id);
export {getAllPosts,getUsers}