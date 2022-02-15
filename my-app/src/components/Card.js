import star from '../assets/star.png'

function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (props.location === 'Online') {
    badgeText = 'ONLINE'
  }

  return (
    <div className='card'>
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img src={require(`../assets/${props.coverImg}`)} className="card-photo" />
      <div className='ratings'>
        <img src={star} className="star" />
        <span className='rating'>{props.stats.rating}</span>
        <span className='review-count'>({props.stats.reviewCount})</span>
      </div>
      <p className='card-title'>{props.title}</p>
      <p className='price'><strong>From ${props.price}</strong>/ person</p>
    </div>
  )
}

export default Card;