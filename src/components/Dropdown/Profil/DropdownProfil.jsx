import IcProfile from "../../../assets/icons/mdi_account.svg";
import IcLogout from "../../../assets/icons/mdi_logout-variant.svg";
import IcHelp from "../../../assets/icons/mdi_help-circleGray.svg";
import { Link } from "react-router-dom";

export default function DropdownProfil() {
  return (
    <div className="card absolute w-[303px] pt-[28px] pb-9 text-bw75 top-20 -left-16">
      <Link
        to={"/profil"}
        className="w-full px-9 py-3 flex items-center text-body-3 hover:bg-bw75/10"
      >
        <img src={IcProfile} alt="Profil Icon" className="mr-[6px]" />
        Profil
      </Link>
      <button className="w-full px-9 py-3 flex items-center text-body-3 hover:bg-bw75/10">
        <img src={IcLogout} alt="Profil Icon" className="mr-[6px]" />
        Bantuan
      </button>
      <button className="w-full px-9 py-3 flex items-center text-body-3 hover:bg-bw75/10">
        <img src={IcHelp} alt="Profil Icon" className="mr-[6px]" />
        Logout
      </button>
    </div>
  );
}
