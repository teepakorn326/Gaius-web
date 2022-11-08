import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import MyListPage from "../pages/MyListPage";
import RoomDetail from "../pages/RoomDetail";
import RegisterPage from "../pages/RegisterPage";
import ResultPage from "../pages/ResultePage";

import Layout from "../layouts/Layout";
import AddRoom from "../pages/AddRoom";

import UpdateRoom from "../pages/updateRoom";
import NotificationPage from "../pages/NotificationPage";
function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/mylist" element={<MyListPage />} />
        <Route path="/roomdetail/:id" element={<RoomDetail />} />
        <Route path="/editroomdetail/:id" element={<UpdateRoom />} />
        <Route path="/addroom" element={<AddRoom />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/notification" element={<NotificationPage />} />
      </Route>
    </Routes>
  );
}

export default Router;
