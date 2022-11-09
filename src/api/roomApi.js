import axios from "../config/axios";

export const createRoom = (input) => {
  const data = axios.post("/room/addroom", input, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
};

export const updateRoom = (input, id) =>
  axios.patch(`/room/updateroom/${id}`, input);

export const deletePhoto = (id) => axios.delete(`/room/deletephoto/${id}`);
export const deleteRoom = (id) => axios.delete(`/room/deleteroom/${id}`);
export const appointment = (input, estateId) =>
  axios.post(`/room/appointment/${estateId}`, input);

export const getRoom = (id) => axios.get(`/room/getroom/${id}`);
export const getAllRoom = (query) =>
  axios.get(query ? `/room/getallroom?${query}` : `/room/getallroom`);
