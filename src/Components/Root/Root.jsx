import "./Roots.css";
import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";

const Root = () => {
  return (
    <div className="fontInter mx-auto bg-[#F1F5E8]">
      <Navbar></Navbar>
      <Outlet />
      <Footer />
    </div>
  );
};
export default Root;
