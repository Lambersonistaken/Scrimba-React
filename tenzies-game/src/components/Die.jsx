/* eslint-disable react/prop-types */
import "../App.css"

const Die = (props) => {
  return (
    <div>
      <div className="die-face">
        {props.value}
      </div>
    </div>
  )
}

export default Die
