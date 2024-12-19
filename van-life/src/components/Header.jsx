import { Link } from "react-router-dom"
import "./Header.css"

const Header = () => {
  return (
    <header>
      <Link className="site-logo" to="/">#VanLife</Link>
      <nav>
          <Link className="nav-item" to="/host">Host</Link>
          <Link className="nav-item" to="/about">About</Link>
          <Link className="nav-item" to="/vans">Vans</Link>
      </nav>
    </header>
  )
}

export default Header
