import Arrow from "../assets/arrow.svg"
import { Link } from "react-router-dom"
import "./VanDetails.css"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

const VanDetails = () => {
  const params = useParams();

  const [vanDetail, setVanDetail] = useState();

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
    .then(res => res.json())
    .then(data => {
        setVanDetail(data.vans)
    })
  }, [])

  console.log(vanDetail)

  return (
    <div className="van-detail-page">
      <div className="back-to-vans">
        <img className="arrow-icon" src={Arrow} alt="" />
        <Link to="/vans">Back to all vans</Link>
      </div>

      <div className="van-detail-container">
        <img className="van-image" src={vanDetail.imageUrl} alt="" />
        <div>{vanDetail.type}</div>
        <h1>{vanDetail.name}</h1>
        <h3>{vanDetail.price}</h3>
        <p>{vanDetail.description}</p>
        <button>Rent this van</button>
      </div>

    </div>
  )
}

export default VanDetails
