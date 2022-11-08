import React from "react";
import AuthRegister from "./authRegister";
function authContainer() {
  return (
    <div className="bg-[#FAF7F7] h-[600px]  flex  ">
      <div className="w-1/2 pl-[220px] h-full py-4 ">
        <AuthRegister />
      </div>
      <img
        className="h-full w-1/2 "
        src="https://img.freepik.com/free-photo/hand-businesswoman-writing-paper-office_1262-2119.jpg?w=900&t=st=1664374255~exp=1664374855~hmac=3f1226d196f74e920ae8e647b1bb6d4a00059fbce6c7edcfe3dbb51e6e5b7795"
        alt="register "
      />
    </div>
  );
}

export default authContainer;
