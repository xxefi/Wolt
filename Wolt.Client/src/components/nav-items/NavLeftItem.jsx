import { Link } from "react-router-dom";
import WoltLogo from "../../assets/wolt-logo.png";

export default function NavLeftItems() {
  return (
    <Link to="/">
      <img className="w-20" src={WoltLogo} alt="Wolt Logo" />
    </Link>
  );
}
