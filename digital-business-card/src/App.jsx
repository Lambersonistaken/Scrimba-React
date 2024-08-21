import "./app.css"
import Twitter from "./assets/tw.png"
import Facebook from "./assets/fb.png"
import Instagram from "./assets/insta.png"
import Github from "./assets/github.png"


function App() {
  

  return (
    <>
      <div className="main-container">

        <div className="image-content">
          
        </div>

        <div className="bio-content">
          <h2>İsmail Emir Lambacıoğlu</h2>
          <h4 className="job-title">Frontend Developer</h4>
          <p className="mail">ismailemirr54@gmail.com</p>
          <div className="contact">
            <button className="email">Email</button>
            <button className="linked">LinkedIn</button>            
          </div>
          <div className="desc">
          <h3>About</h3>
          <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
          <h3>Interests</h3>
          <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
          </div>
          
        </div>

        <footer>
          <div className="socials">
            <a href=""><img src={Twitter} alt="" /></a>
            <a href=""><img src={Facebook} alt="" /></a>
            <a href=""><img src={Instagram} alt="" /></a>
            <a href=""><img src={Github} alt="" /></a>
          </div>
        </footer>


      </div>
    </>
  )
}

export default App
