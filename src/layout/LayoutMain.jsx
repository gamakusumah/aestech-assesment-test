export default function LayoutMain(props) {
  return <div className="grid gap-6">{props.children}</div>;
}

const Head = (props) => {
  return <div className="grid grid-cols-12 gap-6 ">{props.children}</div>;
};

const HeadLeft = (props) => {
  return <div className="col-span-4 h-full mb-[30px]">{props.children}</div>;
};

const HeadRight = (props) => {
  return (
    <div className="col-span-8 h-full flex items-end">{props.children}</div>
  );
};

const Body = (props) => {
  return (
    <div className="grid grid-cols-12 gap-6 min-h-[651px]">
      {props.children}
    </div>
  );
};

const BodyLeft = (props) => {
  return <div className="col-span-4">{props.children}</div>;
};

const BodyRight = (props) => {
  return <div className="col-span-8">{props.children}</div>;
};

LayoutMain.Head = Head;
LayoutMain.HeadLeft = HeadLeft;
LayoutMain.HeadRight = HeadRight;
LayoutMain.Body = Body;
LayoutMain.BodyLeft = BodyLeft;
LayoutMain.BodyRight = BodyRight;
