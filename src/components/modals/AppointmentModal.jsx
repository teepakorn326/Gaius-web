import React, { useMemo, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useRoom } from "../../contexts/RoomContext";
import dateFormat from "dateformat";
import { useAuth } from "../../contexts/AuthContext";
import { useEffect } from "react";

function AppointmentModal({ roomData, book }) {
  const data = book?.data?.room;

  const { id } = useParams();

  const { user } = useAuth();
  const { getRoom, appointment } = useRoom();

  const [showModal, setShowModal] = useState(false);
  const [selectDate, setSelectDate] = useState("");
  const [booking, setBooking] = useState({
    appointmentDate: "",
    startDate: "",
    endDate: "",
    renterId: user?.id,
    ownerId: data?.ownerId,
  });

  const dateNow = useMemo(() => new Date(), []);

  useEffect(() => {
    if (user) {
      setBooking({ ...booking, renterId: user?.id, ownerId: data?.ownerId });
    }
  }, [user, data]);

  const handleChangeInput = (e) => {
    setBooking({ ...booking, [e.target.name]: e.target.value });
  };

  const addOneYear = (input) => {
    const date = new Date(input);
    date.setFullYear(date.getFullYear() + 1);
    return dateFormat(date, "yyyy-mm-dd");
  };
  const date = new Date(selectDate || dateNow);
  const newDate = addOneYear(date);

  return (
    <>
      <button
        className=" text-blue-900 hover:text-blue-500 underline font-bold"
        type="button"
        onClick={() => setShowModal(true)}
      >
        CLICK HERE
      </button>
      {showModal ? (
        <>
          <div
            onClick={() => setShowModal(false)}
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="relative w-auto my-6 mx-auto max-w-3xl"
            >
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Appointment</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className=" p-6 flex-auto">
                  <div>Appointment date</div>
                  <input
                    type="date"
                    name="appointmentDate"
                    min={dateNow}
                    onChange={handleChangeInput}
                    className="border"
                  />
                  <div>Start date</div>
                  <input
                    type="date"
                    name="startDate"
                    min={dateNow}
                    onChange={(e) => {
                      setSelectDate(e.target.value);
                      setBooking({
                        ...booking,
                        startDate: e.target.value,
                        endDate: addOneYear(e.target.value),
                      });
                    }}
                    className="border"
                  />
                  <div>End date</div>
                  <input
                    type="date"
                    name="endDate"
                    value={newDate}
                    min={dateNow}
                    readOnly
                    className="border"
                  />
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                    onClick={() => setShowModal(false)}
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default AppointmentModal;
