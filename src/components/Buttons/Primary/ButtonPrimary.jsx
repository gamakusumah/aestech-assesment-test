export default function ButtonPrimary(props) {
  const { children, type, size, color } = props;

  return (
    <button type={type} className={`btn-${size} btn-${color}`}>
      {children}
    </button>
  );
}
