import { useEffect, useState } from "react";
import { validateRoom } from "../../validation/roomValidation";
import { toast } from "react-toastify";
import { useRoom } from "../../contexts/RoomContext";
import { useNavigate, useParams } from "react-router-dom";

function EditRoomdetail({ data }) {
  const params = useParams();
  const { updateRoom, deletePhoto, getRoom } = useRoom();

  const getData = async () => {
    let room = await getRoom(params.id);
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

      description: room.data.room.description,
    });
    setPhotos(room.data.room.Photos);
  };
  useEffect(() => {
    getData();
  }, []);

  const navigate = useNavigate();

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
  });
  const [photos, setPhotos] = useState([]);
  const [file, setFile] = useState([]);

  const handleChangeInput = (e) => {
    setRoomData({ ...roomData, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    const { error } = validateRoom();
    if (error) {
      return toast.error(error.message);
    }
    try {
      const formData = new FormData();

      for (const key in roomData) {
        formData.append(`${key}`, roomData[key]);
      }

      for (let item of file) {
        formData.append("estatePhoto", item);
      }

      const res = await updateRoom(formData, roomData.id);
      toast.success(`success update room ${res?.data?.message}`);
      navigate(-1);
      // location.reload();
    } catch (err) {
      toast.error(err.response?.data.message);

      console.log(err);
    }
  };
  const handleOnDelete = async (id) => {
    await deletePhoto(id);
    let room = await getRoom(roomData.id);
    setPhotos(room.data.room.Photos);
  };

  return (
    <div>
      {" "}
      <div className="flex justify-center h-[120px] text-[60px] text-sky-900  ">
        Update room
      </div>
      <form
        className="bg-white h-[120vh] w-[50vw] flex flex-col gap-2 py-7 px-5 "
        onSubmit={handleSubmitForm}
      >
        <div>Project Name</div>
        <input
          name="projectName"
          onChange={handleChangeInput}
          value={roomData.projectName}
          className="form-control  h-[50px]  border focus:outline-sky-800 focus:shadow-lg   "
          placeholder="Input Project Name"
        />
        <div>Price detail</div>
        <div className="flex flex-row gap-4">
          <input
            name="rentalPrice"
            onChange={handleChangeInput}
            value={roomData.rentalPrice}
            className="form-control w-1/3 h-10  border  focus:outline-sky-800 focus:shadow-lg  "
            placeholder="Rental price(Bath/month)"
          />
          <input
            name="depositPrice"
            onChange={handleChangeInput}
            value={roomData.depositPrice}
            className="form-control w-1/4 h-10  border  focus:outline-sky-800 focus:shadow-lg  "
            placeholder="Deposit (month)"
          />
          <input
            name="advancePayment"
            onChange={handleChangeInput}
            value={roomData.advancePayment}
            className="form-control w-1/4 h-10  border   focus:outline-sky-800 focus:shadow-lg "
            placeholder="Advance Payment(month)"
          />
        </div>
        <div>Room detail</div>
        <div className="flex flex-row gap-4">
          <select
            className="h-10 border text-gray-400"
            name="type"
            onChange={handleChangeInput}
            value={roomData.type}
          >
            <option selected disabled>
              type
            </option>
            <option value="Condominium">Condominium</option>
            <option value="Flat">Flat</option>
            <option value="Dormitory">Dormitory</option>
            <option value="Home">Home</option>
            <option value="townHouse">Town house</option>
          </select>
          <input
            className="form-control w-1/3 h-10  border focus:outline-sky-800 focus:shadow-lg  "
            placeholder="Room size(sq.m.)"
            name="size"
            onChange={handleChangeInput}
            value={roomData.size}
          />

          <select
            className="h-10 border text-gray-400"
            name="unitType"
            onChange={handleChangeInput}
            value={roomData.unitType}
          >
            <option selected disabled>
              Unit type
            </option>
            <option value="1 bedroom">1 bedroom</option>
            <option value="2 bedroom">2 bedroom</option>
            <option value="3 bedroom">3 bedroom</option>
            <option value="4 bedroom">4 bedroom</option>
            <option value="5 bedroom">5 bedroom</option>
          </select>
          <input
            className="form-control w-1/4 h-10  border  focus:outline-sky-800 focus:shadow-lg  "
            placeholder="Floor"
            name="floor"
            onChange={handleChangeInput}
            value={roomData.floor}
          />
          <input
            className="form-control w-1/4 h-10  border  focus:outline-sky-800 focus:shadow-lg  "
            placeholder="Building"
            name="building"
            onChange={handleChangeInput}
            value={roomData.building}
          />
        </div>
        <div>Address detail</div>
        <div className="flex flex-wrap gap-4">
          <input
            className="form-control w-1/5 h-10  border  focus:outline-sky-800 focus:shadow-lg  "
            placeholder="Province"
            name="province"
            onChange={handleChangeInput}
            value={roomData.province}
          />
          <input
            className="form-control w-1/5 h-10  border  focus:outline-sky-800 focus:shadow-lg  "
            placeholder="District"
            name="district"
            onChange={handleChangeInput}
            value={roomData.district}
          />
          <input
            className="form-control w-1/5 h-10  border  focus:outline-sky-800 focus:shadow-lg  "
            placeholder="Sub-district"
            name="subDistrict"
            onChange={handleChangeInput}
            value={roomData.subDistrict}
          />
          <input
            className="form-control w-1/5 h-10  border  focus:outline-sky-800 focus:shadow-lg  "
            placeholder="Post code"
            name="postCode"
            onChange={handleChangeInput}
            value={roomData.postCode}
          />
          <input
            className="form-control w-1/4 h-10  border  focus:outline-sky-800 focus:shadow-lg  "
            placeholder="Google map link"
            name="mapUrl"
            onChange={handleChangeInput}
            value={roomData.mapUrl}
          />
          <input
            className="form-control w-1/4 h-10  border  focus:outline-sky-800 focus:shadow-lg  "
            placeholder="Plus Code"
            name="plusCode"
            onChange={handleChangeInput}
            value={roomData.plusCode}
          />
        </div>
        <div>Upload photo</div>
        <div>
          <input
            className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            type="file"
            multiple
            onChange={(e) => {
              setFile(e.target.files);
            }}
          />
          <div className="mt-1 text-sm text-gray-500 dark:text-gray-300">
            SVG, PNG, JPG or GIF (MAX. 800x400px).
          </div>
        </div>

        <div className="flex gap-5 items-center p-4">
          {photos?.map((data) => (
            <div className="p-0 m-0 w-fit  flex relative  gap-1">
              <img className="  " src={data.photoUrl} />
              <button
                type="button"
                onClick={() => handleOnDelete(data.id)}
                className="flex absolute text-red-800 font-bold hover:scal-125  "
                style={{
                  position: "absolute",
                  top: -9,
                  right: -5,
                }}
              >
                x
              </button>
            </div>
          ))}
        </div>
        <div>Description</div>

        <textarea
          className="form-control w-full h-[400px]  focus:outline-sky-800 border "
          placeholder="Input description"
          name="description"
          onChange={handleChangeInput}
          value={roomData.description}
        />
        <button
          type="submit"
          className="bg-white border-2 border-sky-800 rounded text-sky-800 hover:text-white font-bold hover:bg-sky-800"
        >
          Submit{" "}
        </button>
      </form>
    </div>
  );
}

export default EditRoomdetail;
