import "./navbar.css";
import Airbnb from "./assets/airbnblogo.png"

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="logo" src={Airbnb} alt="" />
    </div>
  )
}

export default Navbar
