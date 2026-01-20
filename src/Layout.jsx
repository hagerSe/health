import { Outlet } from "react-router-dom";
import BgImage from "./assets/6.jpg";

function Layout() {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: `url(${BgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Outlet />
    </div>
  );
}

export default Layout;
