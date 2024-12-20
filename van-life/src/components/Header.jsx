import { NavLink } from "react-router-dom"
import "./Header.css"

const Header = () => {
  return (
    <header>
      <NavLink className="site-logo" to="/">#VanLife</NavLink>
      <nav>
          <NavLink className={({isActive}) => isActive ? "activated" : null} to="/host">Host</NavLink>
          <NavLink className={({isActive}) => isActive ? "activated" : null} to="/about">About</NavLink>
          <NavLink className={({isActive}) => isActive ? "activated" : null} to="/vans">Vans</NavLink>
      </nav>
    </header>
  )
}

export default Header
