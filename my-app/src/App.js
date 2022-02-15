import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Card from './components/Card'
import './styles.css'
import cardsData from './data.js'

function App() {
  const cards = cardsData.map(card=>{
    return <Card 
      key={card.id}
      {...card}
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
