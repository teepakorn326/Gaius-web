import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useRoom } from "../contexts/RoomContext";

function NotificationCard({ result }) {
  const { user } = useAuth();
  const { deleteBookingList, updateRoom } = useRoom();
  const [booking, setBooking] = useState(result.Estate);
  const appointDate =
    result?.appointmentDate?.slice(8, 10) +
    "/" +
    result?.appointmentDate?.slice(5, 7) +
    "/" +
    result?.appointmentDate?.slice(0, 4);

  const startDate =
    result?.startDate?.slice(8, 10) +
    "/" +
    result?.startDate?.slice(5, 7) +
    "/" +
    result?.startDate?.slice(0, 4);

  const endDate =
    result?.endDate?.slice(8, 10) +
    "/" +
    result?.endDate?.slice(5, 7) +
    "/" +
    result?.endDate?.slice(0, 4);

  const handleAccept = async () => {
    setBooking({ ...booking, status: true, renterId: result?.renterId });
    const successBooking = {
      ...booking,
      status: true,
      renterId: result?.renterId,
    };
    const res = await updateRoom(successBooking, result?.Estate.id);
  };
  console.log("result", result);
  return (
    <div className="border rounded flex justify-between h-72  w-full">
      <div className="w-2/3 justify-between flex ">
        <img src={result?.Estate?.Photos[0]?.photoUrl} className="w-1/2" />
        <div className=" h-full w-2/5 flex flex-col gap-3 justify-center">
          <div>Order id : {result?.id}</div>
          <div>Project name : {result?.Estate?.projectName}</div>
          <div>Appointment date : {appointDate}</div>
          <div>Start date : {startDate}</div>
          <div>End date : {endDate}</div>
          {user?.id === result?.Owner?.id ? (
            <div>
              Renter : {result?.Renter?.firstName} {result?.Renter?.lastName}
            </div>
          ) : (
            <div>
              Owner : {result?.Owner?.firstName} {result?.Owner?.lastName}
            </div>
          )}
          {user?.id === result?.Owner?.id ? (
            <div>Tel : {result?.Renter?.mobile}</div>
          ) : (
            <div>Tel : {result?.Owner?.mobile}</div>
          )}
        </div>
      </div>
      {user?.id === result?.Owner?.id ? (
        !result?.Estate?.status ? (
          <div className=" h-full justify-center gap-11 flex flex-col">
            <button
              onClick={handleAccept}
              className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 "
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Accept
              </span>
            </button>
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Reject
              </span>
            </button>
          </div>
        ) : (
          // result?.Estate?.renterId === result?.renterId ?
          <div className="text-blue-900"> Approve !!! </div>
        )
      ) : // : (
      //   <div className="text-blue-900">not Approve !!! </div>
      // )

      result?.Estate?.renterId === result?.renterId ? (
        <div className=" h-full justify-end gap-11 flex flex-col">
          <div className="text-blue-900">approve</div>
        </div>
      ) : (
        <div className=" h-full justify-end gap-11 flex flex-col">
          <div className="text-blue-900">...waiting for approve</div>
        </div>
      )}
    </div>
  );
}

export default NotificationCard;
