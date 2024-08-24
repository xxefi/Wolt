import { Link } from "react-router-dom";
import "../../styles/Button.scss";

export default function Button() {
  return (
    <Link to="/" className="btn">
      Go back?
    </Link>
  );
}
