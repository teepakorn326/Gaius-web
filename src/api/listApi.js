import axios from "../config/axios";

export const mylist = () => {
  const list = axios.get(`/mylist`);
  return list;
};
