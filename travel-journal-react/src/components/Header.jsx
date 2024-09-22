import "./Header.css";
import Globe from "../../public/assets/Globe.svg";

const Header = () => {
  return (
    <div>
      <header>
        <img src={Globe} alt="" />
        <h2>my travel journal.</h2>
      </header>
    </div>
  )
}

export default Header
