import './App.css'
import Die from './components/Die'
import { useState } from 'react';
import {nanoid} from "nanoid"

function App() {

  function allNewDice () {
    let diceArr = [];
    
    for(let i =0; i<10; i++) {
        let random = Math.ceil(Math.random() * 6);
        diceArr.push({id:nanoid(),value:random, isHeld:false})
    }
    
    return diceArr
}

const[dices,setDices] = useState(allNewDice)

const diceElements = dices.map((item) => {
  return (
    <Die key={item.id} isHeld={item.isHeld} value={item.value} holdDice={() => holdDice(item.id)}/>
  )
})

function handleClick () {
  setDices(allNewDice)
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
