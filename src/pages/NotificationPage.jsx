import React, { useEffect, useState } from "react";
import NotificationCard from "../components/NotificationCard";
import { useRoom } from "../contexts/RoomContext";

function NotificationPage() {
  const { allList } = useRoom();
  console.log("allList", allList);
  return (
    <div className="flex bg-[#FAF7F7] h-full  flex-col pt-12 items-center">
      <div className="bg-[#F3F3FA] w-full h-[200px] flex justify-center flex-col items-center gap-6 ">
        <div className="text-gray-500 flex items-center gap-4 ">
          <hr className="w-[300px]" />
          Notification
          <hr className="w-[300px]" />
        </div>
        <div className="h-[3rem] flex  gap-10">
          <select defaultValue="-99999" className="h-[3rem] " name="price">
            <option value="-99999" disabled>
              Price/Bath
            </option>
            <option value={"1000-5000"}>1,000-5,000</option>
            <option value={"5001-10000"}>5,001-10,000</option>
            <option value={"10001-15000"}>10,001-15,000</option>
            <option value={"15001-20000"}>15,001-20,000</option>
            <option value={"20001-1000000000"}>over 20,000</option>
            <option value={"1-200000000"}>select all</option>
          </select>
          <select defaultValue="-99999" className="h-[3rem]">
            <option value="-99999" disabled>
              Distance/km
            </option>
            <option>0-5 </option>
            <option>5-10</option>
            <option>10-15</option>

            <option>over 15</option>
            <option>select all</option>
          </select>
          <select defaultValue="-99999" className="h-[3rem]" name="type">
            <option value="-99999" disabled>
              Type
            </option>
            <option value={"Condominium"}>Condominium</option>
            <option value={"Flat"}>flat</option>
            <option>Dormitory</option>

            <option>select all</option>
          </select>
          <select defaultValue="-99999" className="h-[3rem]">
            <option value="-99999" disabled>
              Status
            </option>
            <option>20-30</option>
            <option>30-40</option>
            <option>40-50</option>

            <option>over 50</option>
            <option>select all</option>
          </select>
        </div>
      </div>
      <div className="w-full py-2 px-[225px] gap-3 flex flex-col">
        {(allList.reverse() || []).map((result) => (
          <NotificationCard key={result?.id} result={result} />
        ))}
      </div>
    </div>
  );
}

export default NotificationPage;
