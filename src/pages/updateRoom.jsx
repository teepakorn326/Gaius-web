import React from "react";
import { useState } from "react";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useLocation } from "react-router-dom";
// import Addroomdetail from "../feature/room/Addroomdetail";
import EditRoomdetail from "../feature/room/EditRoomDetail.";

function AddRoom() {
  const location = useLocation();

  const data = location.state?.dataKuy;
  return (
    <div className=" bg-[#FAF7F7] h-[150vh]  px-[220px] pt-[50px] flex  items-center flex-col ">
      <EditRoomdetail data={data} />
    </div>
  );
}

export default AddRoom;
