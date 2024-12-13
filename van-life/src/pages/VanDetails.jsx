import Arrow from "../assets/arrow.svg"
import { Link } from "react-router-dom"
import "./VanDetails.css"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

const VanDetails = () => {
  const params = useParams();

  const [van, setVan] = useState(null)

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
        .then(res => res.json())
        .then(data => setVan(data.vans))
}, [params.id])


  return (
    <div className="van-detail-page">
      <div className="back-to-vans">
        <img className="arrow-icon" src={Arrow} alt="" />
        <Link to="/vans">Back to all vans</Link>
      </div>

      <div className="van-detail-container">
            {van ? (
                <div className="van-detail">
                    <img src={van.imageUrl} />
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                    <h2>{van.name}</h2>
                    <p className="van-price"><span>${van.price}</span>/day</p>
                    <p>{van.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
            ) : <h2>Loading...</h2>}
        </div>

    </div>
  )
}

export default VanDetails
