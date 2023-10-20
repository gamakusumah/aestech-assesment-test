import Text from "../../../Text/Text";
import ProfileDefault from "../../../../assets/images/profile-default.png";
import IcInstagram from "../../../../assets/icons/mdi_instagram.svg";
import IcTwitter from "../../../../assets/icons/mdi_twitter.svg";
import IcFacebook from "../../../../assets/icons/mdi_facebook.svg";

export default function CardProfilePrimary() {
  return (
    <div className="card p-[50px] h-full flex flex-col items-center">
      {/* Identity */}
      <div className="text-center">
        <div className="w-[200px] h-[200px] bg-[#FEEFE7] rounded-xl overflow-hidden flex items-end justify-center mb-5">
          <img src={ProfileDefault} alt="Profile Picture" />
        </div>
        <Text size="2" type="bold">
          dr. Anggy Juniarto
        </Text>
        <Text size="4" type="normal">
          CEO
        </Text>
      </div>

      {/* Social Media */}
      <div className="grid grid-cols-3 gap-6 mt-6 mb-12">
        <a href="https://www.instagram.com/">
          <img src={IcInstagram} alt="Instagram Icon" />
        </a>
        <a href="https://www.twitter.com/">
          <img src={IcTwitter} alt="Twitter Icon" />
        </a>
        <a href="https://www.facebook.com/">
          <img src={IcFacebook} alt="Facebook Icon" />
        </a>
      </div>

      {/* Office */}
      <div className="text-center">
        <Text size="2" type="bold">
          Klinik Cabang Bandung
        </Text>
        <Text size="4" type="normal">
          Bandung, Jawa Barat
        </Text>
      </div>
    </div>
  );
}
