import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function AllRoomList({ result }) {
  const { user } = useAuth();

  return (
    <Link
      to={`/roomdetail/${result.id}`}
      className=" bg-white  w-[250px] border shadow-xl hover:shadow-2xl "
    >
      <img
        className="h-[160px] w-full"
        src={
          result?.Photos[0]?.photoUrl
            ? result?.Photos[0]?.photoUrl
            : "https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"
        }
        alt="room "
      />
      <div className="pl-4 flex flex-col gap-2">
        <p className="text-[20px] font-bold overflow-hidden ">
          {result.projectName}
        </p>
        <div className="text-[10px] text-gray-400 ">
          {result.district} {result.province} Thailand
        </div>
        <div> {result.rentalPrice} Bath/month</div>
        <div> {result.unitType}</div>
        <div> {result.size} sq.m.</div>

        {result?.ownerId === user.id && (
          <div>
            <div>status : {result?.status ? "rented" : "Avaiable"} </div>
            <div>
              start from {result?.status ? result?.Booking.startDate : "-"}
            </div>
            <div>until {result?.status ? result?.Booking.endDate : "-"}</div>
          </div>
        )}
      </div>
    </Link>
  );
}

export default AllRoomList;
