/* eslint-disable no-unused-vars */
import './App.css'
import Die from './components/Die'
import { useState, useEffect } from 'react';
import {nanoid} from "nanoid"
import Confetti from 'react-confetti'

function App() {


  const [tenzies, setTenzies] = useState(false)

  

function allNewDice() {
  const newDice = []
  for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie())
  }
  return newDice
}

const[dices,setDices] = useState(allNewDice)

const diceElements = dices.map((item) => {
  return (
    <Die key={item.id} isHeld={item.isHeld} value={item.value} holdDice={() => holdDice(item.id)}/>
  )
})



function holdDice(id) {
  setDices(prevDice => prevDice.map((item) => item.id === id ? {...item, isHeld: !item.isHeld} : item))
}

useEffect(() => {
  const allHeld = dices.every(die => die.isHeld)
  const firstValue = dices[0].value
  const allSameValue = dices.every(die => die.value === firstValue)
  if (allHeld && allSameValue) {
      setTenzies(true)
      console.log("You won!")
  }
}, [dices])

function generateNewDie() {
  return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid()
  }
}

function handleClick () {
  if(tenzies) {
    setTenzies(false)
    setDices(allNewDice())
  }
  setDices(oldDice => oldDice.map(die => {
    return die.isHeld ? 
        die :
        generateNewDie()
}))
}

  return (
    <>
    <main>
    {tenzies && <Confetti width={1400}/>}
      <div className='inside-div'>
        <div className='tenzies-title'>
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. 
            Click each die to freeze it at its current value between rolls.</p>
        </div>
        <div className='dice-con'>
        {diceElements}
        </div>
        <button onClick={handleClick} className='roll-button'>{tenzies ? "New Game" : "Roll"}</button>
      </div>
    </main>
      
    </>
  )
}

export default App
