import "../../styles/Display.scss";
import Button from "./Button.jsx";
import Error from "../../assets/Scarecrow.png";
export default function Display() {
  return (
    <div className="display">
      <div className="display__img">
        <img src={Error} alt="404-Scarecrow" />
      </div>
      <div className="display__content">
        <h2 className="display__content--info">I have bad news for you</h2>
        <p className="display__content--text">
          The page you are looking for might be removed or is temporarily
          unavailable
        </p>
        <Button className="btn">Back to homepage</Button>
      </div>
    </div>
  );
}
