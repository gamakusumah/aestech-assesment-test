import Text from "../../../Text/Text";
import Input from "../../../FormInputs/Input/Input";
import TextArea from "../../../FormInputs/TextArea/TextArea";

export default function CardFormPengaturanAkun() {
  return (
    <form className="card px-14 py-12 h-full flex flex-col space-y-6">
      <Text size="3" type="bold">
        Sosial Media
      </Text>
      {/* Row */}
      <div className="flex items-center">
        <div className="w-36">
          <Text size="4" type="bold">
            Facebook
          </Text>
        </div>
        <div className="w-full">
          <Input
            type="text"
            placeholder="Username Facebook"
            label={true}
            labelText="facebook.com/"
          />
        </div>
      </div>
      {/* Row */}
      <div className="flex items-center">
        <div className="w-36">
          <Text size="4" type="bold">
            Twitter
          </Text>
        </div>
        <div className="w-full">
          <Input
            type="text"
            placeholder="Username Twitter"
            label={true}
            labelText="twitter.com/"
          />
        </div>
      </div>
      {/* Row */}
      <div className="flex items-center">
        <div className="w-36">
          <Text size="4" type="bold">
            Instagram
          </Text>
        </div>
        <div className="w-full">
          <Input
            type="text"
            placeholder="Username Instagram"
            label={true}
            labelText="instagram.com/"
          />
        </div>
      </div>
    </form>
  );
}
