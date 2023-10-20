import IcHospital from "../../../assets/icons/mdi_hospital-building.svg";
import IcArrow from "../../../assets/icons/mdi_chevron-right.svg";
import { useState } from "react";
import ButtonLink from "../../Buttons/Link/ButtonLink";

export default function DropdownCabang() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Cabang Bandung");

  return (
    <div className="relative">
      {/* Toggle Dropdown Cabang */}
      <button
        className="text-2xl font-bold text-bw flex items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src={IcHospital} alt="Icon" className="mr-4" />
        {selected}
        <img src={IcArrow} alt="Icon" className="ml-3" />
      </button>

      {/* Dropdown Cabang  */}
      {isOpen && (
        <div className="card z-50 card-dropdown w-[379px] p-9">
          <h6 className="font-bold text-2xl mb-6">Data Cabang</h6>
          <ul className="text-xl mb-6">
            <li
              className="py-[9px] cursor-pointer"
              onClick={() => setSelected("Cabang Bandung")}
            >
              Cabang Bandung
            </li>
            <li
              className="py-[9px] cursor-pointer"
              onClick={() => setSelected("Cabang Jakarta")}
            >
              Cabang Jakarta
            </li>
            <li
              className="py-[9px] cursor-pointer"
              onClick={() => setSelected("Cabang Palembang")}
            >
              Cabang Palembang
            </li>
            <li
              className="py-[9px] cursor-pointer"
              onClick={() => setSelected("Cabang Samarinda")}
            >
              Cabang Samarinda
            </li>
          </ul>
          <div className="w-full" onClick={() => setIsOpen(!isOpen)}>
            <ButtonLink
              href="/daftar-cabang"
              size="very-small"
              color="primary"
              width="full"
            >
              Lihat Semua Cabang
            </ButtonLink>
          </div>
        </div>
      )}
    </div>
  );
}
