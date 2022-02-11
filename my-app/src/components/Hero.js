import grid from '../assets/grid.png'

function Hero() {
  return (
    <section>
      <img src={grid} className="photo" />
      <h1 className='title'>Online Experiences</h1>
      <p className='intro'>Join unique interactive activities led by one-of-a-kind hosts--all without leaving home</p>
    </section>
  );
}

export default Hero;