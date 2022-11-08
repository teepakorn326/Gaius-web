import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function AuthLogin() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [input, setInput] = useState({ email: "", password: "" });
  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      await login(input);
      toast.success("success login");

      navigate("/");
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data?.message);
    }
  };
  return (
    <form
      className="flex flex-col w-1/5 gap-5 items-center "
      onSubmit={handleSubmitForm}
    >
      <div className="text-[70px]">Sign in</div>
      <div>Sign in and start managing your life!</div>
      <input
        className="form-control relative  w-full  px-3 py-1.5 text-base font-normal text-gray-700 bg-white border focus:bg-white focus:border-blue-600 focus:outline-none "
        placeholder="put the e-mail"
        name="email"
        value={input.email}
        onChange={handleChangeInput}
      />
      <input
        className="form-control relative  w-full  px-3 py-1.5 text-base font-normal text-gray-700 bg-white border focus:bg-white focus:border-blue-600 focus:outline-none "
        placeholder="put the [password]"
        type="password"
        name="password"
        value={input.password}
        onChange={handleChangeInput}
      />
      <div>
        you don't have an account?{" "}
        <Link
          to="/register"
          className="text-blue-600 hover:text-blue-300 underline"
        >
          sign up
        </Link>{" "}
        for ...{" "}
      </div>
      <button className="bg-sky-800 hover:bg-sky-800/60 text-zinc-200 font-bold py-1.5 px-4 w-full ">
        Login
      </button>
    </form>
  );
}

export default AuthLogin;
