import React from "react";
import { useState } from "react";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Addroomdetail from "../feature/room/Addroomdetail";

function AddRoom() {
  return (
    <div className=" bg-[#FAF7F7] h-[150vh]  px-[220px] pt-[50px] flex  items-center flex-col ">
      <Addroomdetail />
    </div>
  );
}

export default AddRoom;
