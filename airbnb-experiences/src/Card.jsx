/* eslint-disable react/prop-types */
import "./card.css"


const Card = ({title,price,location, reviewCount, rating,img, coverImg}) => {
  return (
    <>
    <div className="main-container">
        <div className="card-image" style={{backgroundImage: `url(${coverImg})`}}>
            <span className="toast">SOLD OUT</span>
        </div>


        <div className="container-text">
            <div className="rating-con">
                <img className="star" src={img} alt="" />
                <p>{rating} <span className="rating-text">({reviewCount}) - {location}</span></p>
            </div>
            <p className="event-title">{title}</p>
            <p><strong>From ${price}</strong> / person</p>
        </div>
    </div>
    </>
  )
}

export default Card
