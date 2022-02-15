import star from '../assets/star.png'

function Card(props) {
  return (
    <div className='card'>
      <img src={require(`../assets/${props.img}`)} className="card-photo" />
      <div className='ratings'>
        <img src={star} className="star" />
        <span className='rating'>{props.rating}</span>
        <span className='review-count'>({props.reviewCount})</span>
      </div>
      <p className='card-title'>{props.title}</p>
      <p className='price'><strong>From ${props.price}</strong>/ person</p>
    </div>
  )
}

export default Card;