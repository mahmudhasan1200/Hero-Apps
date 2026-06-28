import "./Roots.css";
import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar";
import Banner from "../Header/Banner";
import StatsBanner from "../Header/StatsBanner";

const Root = () => {
  return (
    <div className="fontInter mx-auto bg-[#F1F5E8]">
      <Navbar></Navbar>
      <Outlet />
      <Banner />
      <StatsBanner />
    </div>
  );
};
export default Root;
