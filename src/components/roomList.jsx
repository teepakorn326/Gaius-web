import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function RoomList({ kuy }) {
  const { user } = useAuth();

  return (
    <div
      state={{ kuy }}
      className=" bg-white   w-[250px] border shadow-xl hover:shadow-2xl "
      onClick={() => window.location.assign(`/roomdetail/${kuy?.id}`)}
    >
      <img
        className="h-[160px] w-full"
        src={
          kuy?.Photos[0]?.photoUrl
            ? kuy?.Photos[0]?.photoUrl
            : "https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"
        }
        alt="room "
      />
      <div className="pl-4 flex flex-col gap-2">
        <div className="text-[20px] font-bold overflow-hidden ">
          {" "}
          {kuy?.projectName}{" "}
        </div>
        <div className="text-[10px] text-gray-400 ">
          {" "}
          {kuy?.district} {kuy?.province} Thailand{" "}
        </div>
        <div> {kuy?.rentalPrice} Bath/month</div>
        <div> {kuy?.unitType}</div>
        <div> {kuy?.size} sq.m.</div>

        {kuy?.ownerId === user?.id && (
          <div>
            <div>status : {kuy?.status ? "rented" : "Avaiable"} </div>
            <div>start from {kuy?.status ? kuy?.Booking.startDate : "-"}</div>
            <div>until {kuy?.status ? kuy?.Booking.endDate : "-"}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default RoomList;
