import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Card from './components/Card'
import './styles.css'
import cardsData from './data.js'

function App() {
  const cards = cardsData.map(card=>{
    return <Card 
    img={card.coverImg} 
    rating={card.stats.rating}
    reviewCount={card.stats.reviewCount}
    title={card.title}
    price={card.price}
    />
  })

  return (
    <div>
      <NavBar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  );
}

export default App;
