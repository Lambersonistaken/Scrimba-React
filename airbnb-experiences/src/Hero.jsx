import "./hero.css"
import experience from "./assets/experience.png"

const Hero = () => {
  return (
    <div>
        <div className="image-con">
        <img className="hero-image" src={experience} alt="" />
        </div>

        <div className="text-con">
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </div>
      
    </div>
  )
}

export default Hero
