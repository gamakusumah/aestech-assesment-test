import CardProfileSmall from "../Cards/Profiles/Small/CardProfileSmall";
import DropdownCabang from "../Dropdown/Cabang/DropdownCabang";
import DropdownNotifikasi from "../Dropdown/Notifikasi/DropdownNotifikasi";
import IcHelp from "../../assets/icons/mdi_help-circle.svg";

export default function Topbar() {
  return (
    <header className="w-[1308px] h-[124px] drop-shadow-md bg-white flex items-center justify-between px-14 fixed top-0 right-0">
      <DropdownCabang />
      <div className="flex items-center">
        <DropdownNotifikasi />
        <a href="#" className="ml-6 mr-[18px]">
          <img src={IcHelp} alt="Help Icon" />
        </a>
        <CardProfileSmall />
      </div>
    </header>
  );
}
