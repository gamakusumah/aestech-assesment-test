import IcHospital from "../../../../assets/icons/mdi_hospital-buildingMango.svg";
import IcArrow from "../../../../assets/icons/mdi_chevron-rightBlack.svg";
import Text from "../../../Text/Text";
import { Link } from "react-router-dom";

export default function CardCabangSmall(props) {
  return (
    <div className="card pl-[42px] py-[42px] pr-9 flex items-center justify-between">
      <div className="flex items-center">
        <div className="w-[88px] h-[88px] rounded-xl bg-mango/[0.16] flex items-center justify-center mr-9">
          <img src={IcHospital} alt="Cabang Icon" />
        </div>
        <div>
          <Text size="1" type="bold">
            Klinik {props.nama}
          </Text>
          <Text size="2" type="reguler">
            {props.email}
          </Text>
        </div>
      </div>
      <Link to={"#"}>
        <img src={IcArrow} alt="Arrow Icon" />
      </Link>
    </div>
  );
}
