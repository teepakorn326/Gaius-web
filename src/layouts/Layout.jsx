import { Outlet } from "react-router-dom";
import Header from "./header/Header";

function Layout() {
  return (
    <div className="h-full">
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
