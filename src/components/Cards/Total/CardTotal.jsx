import Text from "../../Text/Text";

export default function CardTotal(props) {
  return (
    <div className="card min-w-[266px] p-9">
      <div className="w-[72px] h-[72px] rounded-xl bg-mango/[0.16] flex items-center justify-center mb-6">
        <img src={props.icon} alt="Card Icon" />
      </div>
      <div>
        <h2 className="font-black text-[64px] leading-[96px] text-primaryGreen -mb-4">
          {props.value}
        </h2>
        <Text size="3" type="normal">
          {props.label}
        </Text>
      </div>
    </div>
  );
}
