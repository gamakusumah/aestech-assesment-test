import { useState } from "react";
import ImgProfile from "../../../../assets/images/profile.png";
import Text from "../../../Text/Text";
import DropdownProfil from "../../../Dropdown/Profil/DropdownProfil";

export default function CardProfileSmall() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex items-center space-x-4 relative">
      <button
        type="button"
        className="w-[72px] h-[72px] rounded-full overflow-hidden bg-[#D9D9D9]"
      >
        <img
          onClick={() => setIsOpen(!isOpen)}
          src={ImgProfile}
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </button>
      <div>
        <Text size="2" type="bold">
          BagasBayu
        </Text>
        <Text size="4" type="normal">
          Manager
        </Text>
      </div>
      {isOpen && <DropdownProfil />}
    </div>
  );
}
