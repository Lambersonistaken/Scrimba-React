import Hero from "./Hero"
import Navbar from "./Navbar"
import Card from "./Card"
import star from "../public/assets/star.png"
import CardData from "./CardData"

const cards = CardData.map((card) => {
  return (
    <Card
      coverImg={card.coverImg}
      key={card.id}
      title={card.title}
      price={card.price}
      location={card.location}
      reviewCount={card.stats.reviewCount}
      rating={card.stats.rating}
      img={star}
    />
  )
}
)




function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      {cards}
    </>
  )
}

export default App
