/* eslint-disable no-unused-vars */
import "./Meme.css";
import MemeData from "../memesData"
import { useState } from "react";

const Meme = () => {


  const [allMemeImages, setAllMemeImages] = useState(MemeData)
    
    const [memeImage, setMemeImage] = useState({
        topText : "",
        bottomText: "",
        randomImage : "http://i.imgflip.com/1bij.jpg"
    })


  function getMemeImage(e) {
    e.preventDefault()
    const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(prevState => {
            return {
                ...prevState,
                randomImage: memesArray[randomNumber].url
            }
        })
        
    
}



  return (
    <>
      <form action="">
        <section className="input-container">
            <div className="label-content">
                <label htmlFor="top">Top Text</label>
                <input type="text" name="top" placeholder="Enter Top Text" />
            </div>
            <div className="label-content">
                <label htmlFor="bottom">Bottom Text</label>
                <input type="text" name="bottom" placeholder="Enter Bottom Text" />
            </div>
        </section>
        <button onClick={getMemeImage} className="submit-button">Get a new meme image  🖼️</button>
      </form>
      <img className="meme-image" width={400} height={400} src={memeImage.randomImage} alt="" />
     
      
    </>
  )
}

export default Meme
