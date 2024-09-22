import Header from "./components/Header";
import Card from "./components/Card";
import Data from "./data"



const cards = Data.map((item) => {
  return (
    <Card
      key={item.id}
      {...item}
    />
    
  )
}
)



function App() {

  return (
    <>
      <Header />
      {cards}
    </>
  )
}

export default App
