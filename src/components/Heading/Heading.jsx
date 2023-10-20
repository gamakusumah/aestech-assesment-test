import Text from "../Text/Text";

export default function Heading(props) {
  return <div>{props.children}</div>;
}

const Title = (props) => {
  return (
    <h1 className="font-bold text-[40px] leading-[60px] text-bw">
      {props.children}
    </h1>
  );
};

const Subtitle = (props) => {
  return (
    <Text size="2" type="normal">
      {props.children}
    </Text>
  );
};

Heading.Title = Title;
Heading.Subtitle = Subtitle;
