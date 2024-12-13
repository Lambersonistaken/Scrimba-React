import Arrow from "../assets/arrow.svg"
import { Link } from "react-router-dom"
import "./VanDetails.css"
import { useParams } from "react-router-dom"

const VanDetails = () => {
  const params = useParams();
  console.log(params)

  return (
    <div className="van-detail-page">
      <div className="back-to-vans">
        <img className="arrow-icon" src={Arrow} alt="" />
        <Link to="/vans">Back to all vans</Link>
      </div>
    </div>
  )
}

export default VanDetails
