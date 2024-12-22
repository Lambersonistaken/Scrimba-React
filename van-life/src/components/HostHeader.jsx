
import { NavLink} from "react-router-dom"


export default function HostHeader() {

    const activated = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    
    return (
        <header>
            <nav>
                <NavLink to="/host" end style={({isActive}) => isActive ? activated : null}>Dashboard</NavLink>
                <NavLink to="/host/income" style={({isActive}) => isActive ?  activated : null}>Income</NavLink>
                <NavLink to="/host/reviews" style={({isActive}) => isActive ? activated : null}>Reviews</NavLink>
            </nav>
        </header>
    )
}