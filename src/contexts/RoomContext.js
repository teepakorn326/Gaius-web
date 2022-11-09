import React, { createContext, useContext, useEffect, useState } from "react";
import * as roomService from "../api/roomApi";
import * as listService from "../api/listApi";
import { useAuth } from "./AuthContext";

const RoomContext = createContext();

function RoomContextProvider({ children }) {
  const [estates, setEstate] = useState([]);
  const [allList, setAllList] = useState([]);

  const createRoom = async (input) => {
    return await roomService.createRoom(input);
  };

  const updateRoom = async (input, id) => {
    const res = await roomService.updateRoom(input, id);
    let clone = [...allList];
    const cloneIndex = clone.findIndex((item) => item.Estate.id === id);
    clone[cloneIndex] = { ...clone[cloneIndex], Estate: input };
    setAllList(clone);
  };

  const deletePhoto = async (id) => await roomService.deletePhoto(id);
  const deleteRoom = async (id) => {
    await roomService.deleteRoom(id);
  };
  const deleteBookingList = async (id) => {
    await listService.deleteBookingList(id);
    setAllList(allList.filter((item) => item.id !== id));
  };

  const getRoom = async (id) => await roomService.getRoom(id);
  const appointment = async (input, id) => {
    const res = await roomService.appointment(input, id);
    console.log(res.data);
    let clone = [...allList];
    clone.push(res.data.newMyBooking);
    setAllList(clone);
  };
  useEffect(() => {
    const allBooking = async () => {
      const res = await listService.allBookingList();
      setAllList(res?.data.myBooking);
    };
    allBooking();
  }, []);
  // console.log("allList", allList);

  return (
    <RoomContext.Provider
      value={{
        createRoom,
        updateRoom,
        deletePhoto,
        getRoom,
        deleteRoom,
        appointment,
        allList,
        deleteBookingList,
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
