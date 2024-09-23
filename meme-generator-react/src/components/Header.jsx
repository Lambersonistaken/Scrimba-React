import "./Header.css";
import TrollFace from "../assets/troll.png"
const Header = () => {
  return (
    <>
     <header>
        <section className="left-content">
            <img src={TrollFace} alt="" />
            <h2>Meme Generator</h2>
        </section>
        <section className="right-content">
            <p>React Course - Project 3</p>
        </section>
     </header> 
    </>
  )
}

export default Header
