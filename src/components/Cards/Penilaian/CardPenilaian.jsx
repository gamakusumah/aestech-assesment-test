import Text from "../../Text/Text";
import IcStarMango from "../../../assets/icons/mdi_starMango.svg";
import IcStar from "../../../assets/icons/mdi_star.svg";

export default function CardPenilaian() {
  return (
    <div className="card p-9 col-span-3">
      {/* Heading */}
      <div className="flex items-center mb-9">
        <div className="w-[72px] h-[72px] rounded-xl bg-mango/[0.16] flex items-center justify-center mr-6">
          <img src={IcStarMango} alt="Card Icon" />
        </div>
        <div>
          <Text size="2" type="bold">
            Penilaian
          </Text>
        </div>
      </div>

      <div className="grid gap-6">
        {/* Item */}
        <div>
          <Text size="3" type="normal">
            Resepsionis
          </Text>
          <div className="flex items-center justify-between mt-3">
            <div className="flex space-x-1">
              <img src={IcStarMango} alt="Star Icon" />
              <img src={IcStarMango} alt="Star Icon" />
              <img src={IcStarMango} alt="Star Icon" />
              <img src={IcStarMango} alt="Star Icon" />
              <img src={IcStar} alt="Star Icon" />
            </div>
            <Text size="3" type="normal">
              4.0
            </Text>
          </div>
        </div>
        {/* Item */}
        <div>
          <Text size="3" type="normal">
            Dokter
          </Text>
          <div className="flex items-center justify-between mt-3">
            <div className="flex space-x-1">
              <img src={IcStarMango} alt="Star Icon" />
              <img src={IcStarMango} alt="Star Icon" />
              <img src={IcStarMango} alt="Star Icon" />
              <img src={IcStarMango} alt="Star Icon" />
              <img src={IcStarMango} alt="Star Icon" />
            </div>
            <Text size="3" type="normal">
              5.0
            </Text>
          </div>
        </div>
        {/* Item */}
        <div>
          <Text size="3" type="normal">
            Ahli Kecantikan
          </Text>
          <div className="flex items-center justify-between mt-3">
            <div className="flex space-x-1">
              <img src={IcStarMango} alt="Star Icon" />
              <img src={IcStarMango} alt="Star Icon" />
              <img src={IcStarMango} alt="Star Icon" />
              <img src={IcStarMango} alt="Star Icon" />
              <img src={IcStar} alt="Star Icon" />
            </div>
            <Text size="3" type="normal">
              4.0
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
