import { Link, useNavigate, useParams } from "react-router-dom";
import Carousel from "../components/carousel";
import { useLocation } from "react-router-dom";
import { useRoom } from "../contexts/RoomContext";
import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { toast } from "react-toastify";
import AppointmentModal from "../components/modals/AppointmentModal";

function RoomDetail() {
  const { id } = useParams();
  const { getRoom } = useRoom();
  const { user } = useAuth();
  const { deleteRoom } = useRoom();
  const getData = async () => {
    let room = await getRoom(id);
    setRoomData({
      id: room.data.room.id,
      projectName: room.data.room.projectName,
      rentalPrice: room.data.room.rentalPrice,
      depositPrice: room.data.room.depositPrice,
      advancePayment: room.data.room.advancePayment,
      type: room.data.room.type,
      size: room.data.room.size,
      unitType: room.data.room.unitType,
      floor: room.data.room.floor,
      building: room.data.room.building,
      province: room.data.room.province,
      district: room.data.room.district,
      subDistrict: room.data.room.subDistrict,
      postCode: room.data.room.postCode,
      mapUrl: room.data.room.mapUrl,
      plusCode: room.data.room.plusCode,
      ownerId: room.data.room.ownerId,
      renterId: room.data.room.renterId,

      description: room.data.room.description,
      firstName: room.data.room.Owner.firstName,
      lastName: room.data.room.Owner.lastName,
      mobile: room.data.room.Owner.mobile,
      email: room.data.room.Owner.email,
      profileImage: room.data.room.Owner.profileImage,
    });
    setBook(room);
    setPhotos(room.data.room.Photos);
    return room;
  };

  useEffect(() => {
    getData();
  }, []);
  const [book, setBook] = useState({});
  const [roomData, setRoomData] = useState({
    id: "",
    projectName: "",
    rentalPrice: "",
    depositPrice: "",
    advancePayment: "",
    type: "",
    size: "",
    unitType: "",
    floor: "",
    building: "",
    province: "",
    district: "",
    subDistrict: "",
    postCode: "",
    mapUrl: "",
    plusCode: "",
    description: "",
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    profileImage: "",
    ownerId: "",
    renterId: "",
  });
  const [photos, setPhotos] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  const handleClickDelete = async (id) => {
    await deleteRoom(id);
    toast.success(`success delete room `);
    // navigate(-1);
    window.location.assign("/mylist");
  };
  console.log("book", book);
  return (
    <div className=" h-[100vh] w-full px-[220px] ">
      <div className="h-[12vh] flex justify-center flex-col font-bold text-[3rem] ">
        {roomData.projectName}
      </div>
      <div className="flex flex-row">
        <div className=" w-3/5 h-full flex flex-col  gap-10 ">
          <div className="w-full  border bg-gray-300 m-0 ">
            <Carousel data={photos} />
          </div>
          <span className="overflow-hidden">{roomData.description}</span>
        </div>
        <div className="w-[40%] flex items-center  flex-col gap-10 ">
          <div className=" h-[300px] w-[300px] bg-gray-200 flex items-center flex-col justify-center gap-3 ">
            <img
              className="rounded-full bg-white h-[80px] w-[80px] "
              src={
                roomData.profileImage
                  ? roomData.profileImage
                  : "https://sirinc2.org/branch129/wp-content/uploads/2019/04/no-photo-icon-22.png"
              }
              alt="user"
            />
            <div className=" font-bold ">
              {roomData.firstName} {roomData.lastName}
            </div>
            <div className="  ">{roomData.mobile}</div>
            <div className="  ">{roomData.email}</div>
            <div className=" text-[10px] ">
              you'd like to have a look at this property ?
            </div>

            {book?.data?.room?.ownerId !== user?.id && (
              <AppointmentModal book={book} roomData={roomData} />
            )}
            {/* <Link className=" text-blue-900 hover:text-blue-500 underline font-bold  ">
              CLICK HERE
            </Link> */}
          </div>
          <div className=" w-[300px] bg-gray-200 flex flex-col gap-5 p-5">
            <div>
              <div className="flex flex-row gap-9 items-end ">
                Rental
                <h1 className="text-[20px] text-sky-800 ">
                  {roomData.rentalPrice}
                </h1>
                {"      "}
                THB/month
              </div>
              <div className="flex justify-between ">
                <div>Deposit:</div>
                <div> {roomData.depositPrice} month</div>
              </div>{" "}
              <div className="flex justify-between ">
                <div>Advance Payment:</div>
                <div>{roomData.advancePayment} month</div>
              </div>
            </div>
            <hr className="w-full border bg-slate-600" />
            <div className="flex justify-center flex-col gap-5">
              <div className="font-bold text-[22px] text-gray-600 ">
                Room detail
              </div>

              <div className="flex justify-between ">
                <div>Building:</div>
                <div> {roomData?.building ? roomData?.building : " - "}</div>
              </div>

              <div className="flex justify-between ">
                <div>Unit type:</div>
                <div>{roomData?.unitType}</div>
              </div>
              <div className="flex justify-between ">
                <div>On Floor:</div>
                <div> {roomData?.floor ? roomData?.floor : " - "} floor </div>
              </div>
              <div className="flex justify-between ">
                <div>Room size:</div>
                <div> {roomData?.size} sq.m.</div>
              </div>
            </div>
          </div>
          {user?.id === roomData?.ownerId && (
            <div className="gap-10 w-full h-15 flex justify-center">
              <Link
                to={`/editroomdetail/${roomData?.id}`}
                state={{ roomData }}
                className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 "
              >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Update room
                </span>
              </Link>
              <button
                onClick={() => handleClickDelete(roomData?.id)}
                className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
              >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Delete room
                </span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default RoomDetail;
