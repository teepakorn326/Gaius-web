import "./App.css";

import Router from "./route/Router";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Router />
      <ToastContainer autoClose="3000" position="bottom-center" />
    </>
  );
}

export default App;
