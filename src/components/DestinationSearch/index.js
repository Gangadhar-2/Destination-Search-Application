// Write your code here
import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}
  change = event => {
    this.setState({searchInput: event.target.value})
  }
  render() {
    const {destinationsList} = this.props

    const {searchInput} = this.state
    const filteredList = destinationsList.filter(user =>
      user.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg">
        <h1>Destination Search</h1>
        <input
          type="search"
          className="input"
          value={searchInput}
          onChange={this.change}
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
          className="icon"
          alt="search icon"
        />
        <ul className="final-list">
          {filteredList.map(user => (
            <DestinationItem details={user} key={user.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
