import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateRegister } from "../../validation/userValidation";
import { toast } from "react-toastify";
import { useAuth } from "../../contexts/AuthContext";

function AuthRegister() {
  const { register } = useAuth();

  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });
  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const { error } = validateRegister(input);
    if (error) {
      return toast.error(error.message);
    }
    try {
      await register(input);
      toast.success("success register");
      navigate("/login");
    } catch (err) {
      toast.error(err.response?.data.message);
      console.log(err.response?.data);
    }
  };

  return (
    <form
      onSubmit={handleSubmitForm}
      className="flex bg-[#FFFFFF] w-[400px] h-full items-center flex-col gap-3 py-10  "
    >
      <div className=" w-[300px] text-center text-blue-900 font-bold text-[30px] ">
        Create account
      </div>
      <div className="flex flex-col text-sm text-[#707070] ">
        First name
        <input
          name="firstName"
          onChange={handleChangeInput}
          value={input.firstName}
          className="form-control relative w-[300px] px-3 py-1.5 text-base font-normal text-gray-700 bg-white border focus:bg-white focus:border-blue-600 focus:outline-none "
        />
      </div>
      <div className="flex flex-col text-sm text-[#707070] ">
        Last name
        <input
          name="lastName"
          onChange={handleChangeInput}
          value={input.lastName}
          className="form-control relative w-[300px]  px-3 py-1.5 text-base font-normal text-gray-700 bg-white border focus:bg-white focus:border-blue-600 focus:outline-none "
        />
      </div>
      <div className="flex flex-col text-sm text-[#707070] ">
        E-mail
        <input
          name="email"
          onChange={handleChangeInput}
          value={input.email}
          className="form-control relative w-[300px]  px-3 py-1.5 text-base font-normal text-gray-700 bg-white border focus:bg-white focus:border-blue-600 focus:outline-none "
        />
      </div>
      <div className="flex flex-col text-sm text-[#707070] ">
        Phone number
        <input
          name="mobile"
          onChange={handleChangeInput}
          value={input.mobile}
          className="form-control relative w-[300px]  px-3 py-1.5 text-base font-normal text-gray-700 bg-white border focus:bg-white focus:border-blue-600 focus:outline-none "
        />
      </div>
      <div className="flex flex-col text-sm text-sky-700">
        Password
        <input
          name="password"
          onChange={handleChangeInput}
          value={input.password}
          className="form-control relative w-[300px]  px-3 py-1.5 text-base font-normal text-gray-700 bg-white border focus:bg-white focus:border-blue-600 focus:outline-none "
          type="password"
        />
      </div>
      <div className="flex flex-col  text-sm text-sky-700">
        confirm password
        <input
          name="confirmPassword"
          onChange={handleChangeInput}
          value={input.confirmPassword}
          className="form-control relative w-[300px]  px-3 py-1.5 text-base font-normal text-gray-700 bg-white border focus:bg-white focus:border-blue-600 focus:outline-none "
          type="password"
        />
      </div>
      <button
        type="submit"
        className="bg-sky-800 hover:bg-sky-800/60 text-zinc-200 font-bold py-1.5 px-4 rounded-lg w-[300px]  "
      >
        Register
      </button>
    </form>
  );
}

export default AuthRegister;
