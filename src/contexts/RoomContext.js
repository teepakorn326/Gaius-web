import React, { createContext, useContext, useState } from "react";
import * as roomService from "../api/roomApi";
import { useAuth } from "./AuthContext";

const RoomContext = createContext();

function RoomContextProvider({ children }) {
  const [estates, setEstate] = useState([]);

  const createRoom = async (input) => {
    return await roomService.createRoom(input);
  };

  const updateRoom = async (input, id) => {
    return await roomService.updateRoom(input, id);
  };

  const deletePhoto = async (id) => await roomService.deletePhoto(id);
  const deleteRoom = async (id) => await roomService.deleteRoom(id);

  const getRoom = async (id) => await roomService.getRoom(id);
  const appointment = async (input, id) =>
    await roomService.appointment(input, id);

  return (
    <RoomContext.Provider
      value={{
        createRoom,
        updateRoom,
        deletePhoto,
        getRoom,
        deleteRoom,
        appointment,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
}

export const useRoom = () => {
  return useContext(RoomContext);
};

export default RoomContextProvider;
