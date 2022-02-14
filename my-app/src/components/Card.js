import girl from '../assets/girl.jpeg'
import star from '../assets/star.png'

function Card() {
  return (
      <div className='card'>
        <img src={girl} className="girl-photo" />
        <div className='ratings'>
          <img src={star} className="star" />
          <span className='rating'>4.95</span>
          <span className='review-count'>(36)</span>
        </div>
        <p className='card-title'>Learn photography with amazing Sarah!</p>
        <p className='price'><strong>From $83</strong>/ person</p>
      </div>
  )
}

export default Card;