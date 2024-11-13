import './App.css'
import Die from './components/Die'
import { useState, useEffect } from 'react';
import {nanoid} from "nanoid"

function App() {


  const [tenzies, setTenzies] = useState(false)
    
    useEffect(() => {
        console.log("Dice state changed")
    }, [dices])

  function generateNewDie() {
    return {
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid()
    }
}

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

function handleClick () {
  setDices(oldDice => oldDice.map(die => {
    return die.isHeld ? 
        die :
        generateNewDie()
}))
}

function holdDice(id) {
  setDices(prevDice => prevDice.map((item) => item.id === id ? {...item, isHeld: !item.isHeld} : item))
}
  

  return (
    <>
    <main>
      <div className='inside-div'>
        <div className='dice-con'>
        {diceElements}
        </div>
        <button onClick={handleClick} className='roll-button'>Roll</button>
      </div>
    </main>
      
    </>
  )
}

export default App
