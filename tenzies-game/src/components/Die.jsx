/* eslint-disable react/prop-types */
import "../App.css"

const Die = (props) => {

    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }

  return (
    <div>
      <div onClick={props.holdDice} className="die-face" style={styles}>
        {props.value}
      </div>
    </div>
  )
}

export default Die
