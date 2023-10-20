import logo from "../../assets/images/aestech-logo.svg";

import SidebarSection from "./Section/SidebarSection";
import SidebarSectionDashboard from "./Section/Dashboard/SidebarSectionDashboard";
import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <nav className="bg-primary text-white w-[420px] h-screen fixed top-0 left-0">
      {/* Aestech Logo */}
      <Link to={"/"} className="h-[161px] flex items-center justify-center">
        <img className="w-[240px]" src={logo} alt="Aestech-Logo" />
      </Link>

      {/* Sidebar Sections */}
      <ul className="mt-[30px] relative">
        <SidebarSectionDashboard />
      </ul>
    </nav>
  );
}
