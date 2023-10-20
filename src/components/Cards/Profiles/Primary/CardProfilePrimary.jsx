import Text from "../../../Text/Text";
import ProfileDefault from "../../../../assets/images/profile-default.png";
import IcInstagram from "../../../../assets/icons/mdi_instagram.svg";
import IcTwitter from "../../../../assets/icons/mdi_twitter.svg";
import IcFacebook from "../../../../assets/icons/mdi_facebook.svg";

export default function CardProfilePrimary(props) {
  const { data } = props;

  return (
    <div className="card p-[50px] h-full flex flex-col items-center">
      {/* Identity */}
      <div className="text-center">
        <div className="w-[200px] h-[200px] bg-[#FEEFE7] rounded-xl overflow-hidden flex items-center justify-center mb-5">
          <img
            src={data.avatar ? data.avatar : ProfileDefault}
            alt="Profile Picture"
            className="object-cover h-full"
          />
        </div>
        <Text size="2" type="bold">
          {data.fullname}
        </Text>
        <Text size="4" type="normal">
          {data.position}
        </Text>
      </div>

      {/* Social Media */}
      <div className="grid grid-cols-3 gap-6 mt-6 mb-12">
        <a href={data.social_media[0].instagram}>
          <img src={IcInstagram} alt="Instagram Icon" />
        </a>
        <a href={data.social_media[0].twitter}>
          <img src={IcTwitter} alt="Twitter Icon" />
        </a>
        <a href={data.social_media[0].facebook}>
          <img src={IcFacebook} alt="Facebook Icon" />
        </a>
      </div>

      {/* Office */}
      <div className="text-center">
        <Text size="2" type="bold">
          Klinik Cabang {data.branch.name}
        </Text>
        <Text size="4" type="normal">
          {data.branch.address}
        </Text>
      </div>
    </div>
  );
}
