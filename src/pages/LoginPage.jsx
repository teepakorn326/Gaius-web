import React from "react";
// import { Link } from "react-router-dom";
import AuthLogin from "../feature/auth/authLogin";
function LoginPage() {
  return (
    <div className=" flex justify-center  h-[calc(100vh-105px)] pt-10">
      <AuthLogin />
    </div>
  );
}

export default LoginPage;
