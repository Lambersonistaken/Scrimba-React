import "./Meme.css";
import MemeData from "../memesData"
import {useState} from "react";

const Meme = () => {

    function randomImage (e) {
        e.preventDefault();
        let random = Math.floor(Math.random()*MemeData.data.memes.length);
        let memeUrl = MemeData.data.memes[random].url
        console.log(memeUrl)
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
        <button onClick={randomImage} className="submit-button">Get a new meme image  🖼️</button>
      </form>
    </>
  )
}

export default Meme
