/* eslint-disable react/prop-types */
import "./Card.css";
import icon from "../../public/assets/icon.png";

const Card = (props) => {
  return (
    <>
    <main className="card-main-container">
        <section className="left-content">
            <img src={props.imageUrl}  />
        </section>
        <section className="right-content">
            <div className="country-container">
                <img src={icon} alt="" />
                <p>{props.location}</p>
                <a target="_blank" href={props.googleMapsUrl}>View on Google Maps</a>
            </div>
            <h1>{props.title}</h1>
            <p className="right-content-dates">{props.startDate}-{props.endDate}</p>
            <p className="right-content-desc">{props.description}</p>
        </section>
    </main>
    <div className="content-line" />
    </>
  )
}

export default Card
