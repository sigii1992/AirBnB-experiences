import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Card from './components/Card'
import './styles.css'

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Card 
        img="girl.jpeg"
        rating="4.95"
        reviewCount={36}
        title="Learn photography with amazing Sarah!"
        price={83}
      />
    </div>
  );
}

export default App;
