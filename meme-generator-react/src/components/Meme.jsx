import "./Meme.css";

const Meme = () => {
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
        <button className="submit-button">Get a new meme image  🖼</button>
      </form>
    </>
  )
}

export default Meme
