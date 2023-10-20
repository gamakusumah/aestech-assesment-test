export default function Text(props) {
  const { size, type, children } = props;

  return (
    <div className={`text-body-${size} font-${type} text-bw whitespace-nowrap`}>
      {children}
    </div>
  );
}
