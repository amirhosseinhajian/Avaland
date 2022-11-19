import axios from "axios";

const $axios = axios.create({ baseURL: "http://localhost:3000/" });

$axios.interceptors.response.use((res) => {
  return res;
});

export default $axios;
