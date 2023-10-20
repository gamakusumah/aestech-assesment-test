import { Link } from "react-router-dom";

export default function ButtonLink(props) {
  const { children, href, size, color, width } = props;

  return (
    <Link to={href} className={`btn-${size} btn-${color} w-${width}`}>
      {children}
    </Link>
  );
}
