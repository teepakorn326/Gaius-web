import axios from "../config/axios";

export const mylist = () => {
  const list = axios.get(`/mylist`);
  return list;
};
export const allBookingList = async () => {
  const allList = await axios.get(`/mylist/notification`);

  return allList;
};
export const deleteBookingList = async (id) => {
  const allList = await axios.delete(`/mylist/notification/${id}`);

  return allList;
};
