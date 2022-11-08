import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
import * as authService from "../api/authApi";
import {
  addAccessToken,
  removeAccessToken,
  getAcccessToken,
} from "../utils/localStorage";
const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const go = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      getMe();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const getMe = async () => {
    const res = await authService.getMe();
    setUser(res.data.user);
  };

  const register = async (input) => {
    const res = await authService.register(input);
    // setUser(true);

    // addAccessToken(res.data.token);
  };
  const login = async (input) => {
    const res = await authService.login(input);

    getMe();
    addAccessToken(res.data.token);
  };

  const logout = async () => {
    setUser(null);
    removeAccessToken();
    go("/");
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContextProvider;
