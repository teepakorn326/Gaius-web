import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import RoomList from "../components/roomList";
import * as listService from "../api/listApi";
function MyListPage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    try {
      list();
    } catch (err) {}
  }, []);

  const list = async () => {
    const res = await listService.mylist();
    setData(res.data.myEstate);
  };
  return (
    <div className="flex bg-[#FAF7F7]  flex-col items-center">
      <div className="flex flex-col justify-center h-[10rem]">
        <div className="text-[60px]">Your Room List</div>
      </div>

      <div className="bg-[#F3F3FA] w-full h-[200px] flex justify-center flex-col items-center gap-6 ">
        <Link
          to="/addroom"
          className=" bg-white h-[50px] w-[300px] text-blue-900 border-blue-900 border hover:text-white font-bold rounded hover:bg-sky-800  text-center pt-3 "
        >
          {" "}
          + New room{" "}
        </Link>
        <div className="text-gray-500 flex items-center gap-4 ">
          <hr className="w-[300px]" />
          Filter setting
          <hr className="w-[300px]" />
        </div>
        <div className="h-[3rem] flex  gap-10">
          <select className="h-[3rem] ">
            <option selected disabled>
              Price/Bath
            </option>
            <option>1,000-5,000</option>
            <option>5,001-10,000</option>
            <option>10,001-15,000</option>
            <option>15,001-20,000</option>
            <option>over 20,000</option>
            <option>select all</option>
          </select>
          <select className="h-[3rem]">
            <option selected disabled>
              Distance/km
            </option>
            <option>1,000-5,000</option>
            <option>5,001-10,000</option>
            <option>10,001-15,000</option>
            <option>15,001-20,000</option>
            <option>over 20,000</option>
            <option>select all</option>
          </select>
          <select className="h-[3rem]">
            <option selected disabled>
              Type
            </option>
            <option>1,000-5,000</option>
            <option>5,001-10,000</option>
            <option>10,001-15,000</option>
            <option>15,001-20,000</option>
            <option>over 20,000</option>
            <option>select all</option>
          </select>
          <select className="h-[3rem]">
            <option selected disabled>
              Room size/ sq.m.
            </option>
            <option>1,000-5,000</option>
            <option>5,001-10,000</option>
            <option>10,001-15,000</option>
            <option>15,001-20,000</option>
            <option>over 20,000</option>
            <option>select all</option>
          </select>
          <select className="h-[3rem]">
            <option selected disabled>
              status
            </option>
            <option>Rented</option>
            <option>Available</option>

            <option>select all</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-4 content-start pt-10 gap-9 px-[220px] ">
        {data.map((item) => (
          <RoomList item={item} />
        ))}
      </div>
    </div>
  );
}

export default MyListPage;
