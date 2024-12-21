// Write your code here
import './index.css'

const DestinationItem = props => {
  const {details} = props
  const {key, name, imgUrl} = details
  return (
    <li className="list-item">
      <img src={imgUrl} className="img" alt={name} />
      <p>{name}</p>
    </li>
  )
}

export default DestinationItem
