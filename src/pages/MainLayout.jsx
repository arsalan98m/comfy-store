// libraries/packages
import { Outlet } from "react-router-dom";

// components
import { Navbar, Sidebar, Footer } from "../components";
const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
