import './App.css'
import Die from './components/Die'

function App() {


  

  return (
    <>
    <main>
      <div className='inside-div'>
        <div className='dice-con'>
        <Die value={5}/>
        <Die value={5}/>
        <Die value={5}/>
        <Die value={5}/>
        <Die value={5}/>
        <Die value={5}/>
        <Die value={5}/>
        <Die value={5}/>
        <Die value={5}/>
        <Die value={5}/>
        </div>
      </div>
    </main>
      
    </>
  )
}

export default App
