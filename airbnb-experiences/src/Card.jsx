import "./card.css"
import star from "./assets/star.png"

const Card = () => {
  return (
    <>
    <div className="main-container">
        <div className="card-image">
            <span className="toast">SOLD OUT</span>
        </div>


        <div className="container-text">
            <div className="rating-con">
                <img className="star" src={star} alt="" />
                <p>5.0 <span className="rating-text">(6) - USA</span></p>
            </div>
            <p className="event-title">Life lessons with Katie Zaferes</p>
            <p><strong>From $136</strong> / person</p>
        </div>
    </div>
    </>
  )
}

export default Card
