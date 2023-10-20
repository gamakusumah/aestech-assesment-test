import Text from "../../../Text/Text";
import Input from "../../../FormInputs/Input/Input";
import TextArea from "../../../FormInputs/TextArea/TextArea";

export default function CardFormInformasi() {
  return (
    <form className="card px-14 py-12 grid gap-6">
      {/* Row */}
      <div className="flex items-center">
        <div className="w-36">
          <Text size="4" type="bold">
            No Telepon
          </Text>
        </div>
        <div className="w-full">
          <Input type="number" placeholder="08123456789" />
        </div>
      </div>
      {/* Row */}
      <div className="flex items-center">
        <div className="w-36">
          <Text size="4" type="bold">
            E-mail
          </Text>
        </div>
        <div className="w-full">
          <Input type="email" placeholder="june@gmail,com" />
        </div>
      </div>
      {/* Row */}
      <div className="flex">
        <div className="w-36">
          <Text size="4" type="bold">
            Alamat
          </Text>
        </div>
        <div className="w-full">
          <TextArea placeholder="Alamat" />
        </div>
      </div>
    </form>
  );
}
