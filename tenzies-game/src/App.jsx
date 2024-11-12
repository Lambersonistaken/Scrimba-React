/* eslint-disable no-unused-vars */
import './App.css'
import Die from './components/Die'

function App() {

  function allNewDice () {
    let diceArr = [];
    
    for(let i =0; i<10; i++) {
        let random = Math.floor(Math.random() * 6);
        diceArr.push(random)
    }
    
    return diceArr
}

  

  return (
    <>
    <main>
      <div className='inside-div'>
        <div className='dice-con'>
        <Die value={5}/>
        <Die value={4}/>
        <Die value={3}/>
        <Die value={2}/>
        <Die value={5}/>
        <Die value={1}/>
        <Die value={5}/>
        <Die value={3}/>
        <Die value={5}/>
        <Die value={6}/>
        </div>
      </div>
    </main>
      
    </>
  )
}

export default App
