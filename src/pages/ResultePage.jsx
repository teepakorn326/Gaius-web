import React, { useState } from "react";
import { useEffect } from "react";

import * as allService from "../api/roomApi";
import AllRoomList from "../components/allRoomList ";
function ResultPage() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState({
    price: null,
    type: null,
    distance: null,
    room: null,
  });
  useEffect(() => {
    try {
      allList();
    } catch (err) {}
  }, [query]);

  const onChangeFilter = (e) => {
    setQuery({ ...query, [e.target.name]: e.target.value });
  };

  const allList = async () => {
    const objQuery = {};
    if (!!query.price) {
      objQuery.price = query.price;
    }
    const queryString = new URLSearchParams(objQuery).toString();
    const res = await allService.getAllRoom(queryString);
    setData(res.data.room);
  };
  return (
    <div className="flex bg-[#FAF7F7]  flex-col pt-12 items-center">
      <div className="flex flex-col  items-center h-[10rem]">
        <div className="text-[60px]">Search for an offer</div>
        <div className="">Choose from the most advantageous offers</div>
      </div>

      <div className="bg-[#F3F3FA] w-full h-[200px] flex justify-center flex-col items-center gap-6 ">
        <div className="text-gray-500 flex items-center gap-4 ">
          <hr className="w-[300px]" />
          Filter setting
          <hr className="w-[300px]" />
        </div>
        <div className="h-[3rem] flex  gap-10">
          <select
            defaultValue="-99999"
            className="h-[3rem] "
            name="price"
            onChange={onChangeFilter}
          >
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
              Room size/ sq.m.
            </option>
            <option>20-30</option>
            <option>30-40</option>
            <option>40-50</option>

            <option>over 50</option>
            <option>select all</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-4 content-start pt-10 gap-9 px-[220px] ">
        {(data || []).map((result) => (
          <AllRoomList key={result.id} result={result} />
        )) ? (
          (data || []).map((result) => (
            <AllRoomList key={result.id} result={result} />
          ))
        ) : (
          <div className="bg-sky-900"> no result </div>
        )}
      </div>
    </div>
  );
}

export default ResultPage;
