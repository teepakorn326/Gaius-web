// import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import dateFormat from "dateformat";
function RoomList({ item }) {
  const { user } = useAuth();
  console.log("item", item);

  return (
    <div
      className=" bg-white   w-[250px] border shadow-xl hover:shadow-2xl "
      onClick={() => window.location.assign(`/roomdetail/${item?.id}`)}
    >
      <img
        className="h-[160px] w-full"
        src={
          item?.Photos[0]?.photoUrl
            ? item?.Photos[0]?.photoUrl
            : "https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"
        }
        alt="room "
      />
      <div className="pl-4 flex flex-col gap-2">
        <div className="text-[20px] font-bold overflow-hidden ">
          {" "}
          {item?.projectName}{" "}
        </div>
        <div className="text-[10px] text-gray-400 ">
          {" "}
          {item?.district} {item?.province} Thailand{" "}
        </div>
        <div> {item?.rentalPrice} Bath/month</div>
        <div> {item?.unitType}</div>
        <div> {item?.size} sq.m.</div>

        {item?.ownerId === user?.id && (
          <div>
            <div>status : {item?.status ? "rented" : "Avaiable"} </div>
            <div>
              start from :{" "}
              {item?.status
                ? dateFormat(item?.Bookings[0]?.startDate, "dd/mm/yyyy")
                : "-"}
            </div>
            <div>
              until :{" "}
              {item?.status
                ? dateFormat(item?.Bookings[0]?.endDate, "dd/mm/yyyy")
                : "-"}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default RoomList;
