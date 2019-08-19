import React, { Component } from 'react'
import { addSpecificBeer, saveRating,
deleteToTry, deleteFave, addNote } from '../../actions'
import { connect } from 'react-redux'
import SpecificBeer from './SpecificBeer'

class BossList extends Component {
  constructor() {
    super()
  }

  addFave(event) {
    const nameOfFave = event.target.beerName.value
    let beerScore = prompt('Rate this beer 1 to 5 stars')
    if (beerScore >= 1 && beerScore <= 5) {
      const beerNote = prompt('Enter Notes Below')
      this.props.dispatch(deleteToTry(nameOfFave))
      this.props.dispatch(saveRating(nameOfFave, beerScore, beerNote))
    }
    else alert('Please try again & enter a numeric value between 1 and 5')
  }
  deleteToTry(event) {
    const nameToDelete = event.target.beername.value
    this.props.dispatch(deleteToTry(nameToDelete))
  }
  deleteFave(event) {
    const faveToDelete = event.target.faveName.value
    const beerScoreToDelete = event.target.faveName.title
    this.props.dispatch(deleteFave(faveToDelete, beerScoreToDelete))
  }

  render() {

    return (
      <div className="boss-list">
        <h2 className="boss-list-header">Boss List</h2>
        {this.props.bosslist.length > 0 ?
        <h3 className="boss-list-subheader">
          Here {this.props.bosslist.length == 1 ? <span>is</span> : <span>are</span>} your
          {this.props.bosslist.length == 1 ? <span> Beer</span> : <span> Beers</span>} To Try...
        </h3> :
        <h3 className="boss-items">
          **You Have No Beers To Try... Please search for & add beers below!**
        </h3>}
        {this.props.bosslist.map((beer, index) => {
        return (
            <div className="boss-items" key={index}>
                <div className="boss-list-items">{beer}</div>
              <div className="boss-list-forms-div">
              <form className="add-fave-form" onSubmit={(e) => this.addFave(e)}>
                <input type="hidden" name="beerName" value={beer} />
                <button type="submit" className="add-fave-button flash-button"
                  onSubmit={(e) => this.deleteToTry(e)} value={beer}>Favorite
                </button>
              </form>
              <form className="delete-to-try-form" onSubmit={(e) => this.deleteToTry(e)}>
                <input type="hidden" name="beername" value={beer} />
                <button type="submit" className="delete-button" value={beer}>Remove</button>
              </form>
              </div>
            </div>
          )
        })}
        {this.props.beerRating.length > 0 ?
        <h3 className="boss-list-subheader boss-list-padding-top">
          Here {this.props.beerRating.length == 1 ? <span>is </span> : <span>are </span>}
          your {this.props.beerRating.length == 1 ? <span>Favorite Beer</span> : <span>Favorite Beers</span>}!
        </h3>
        :
        <h3 className="boss-items">
          **You Have No Favorite Beers... Please add beers to try, then rate and add faves**
        </h3>}
        {
          this.props.beerRating.sort((a, b) => parseInt(b.beerScore) - parseInt(a.beerScore)).map((fave, index) => {
          return (
            <div className="boss-items" key={index}>
              <div className="boss-list-items">
                <span>{fave.name}</span>
                {fave.beerScore !== '' ? <span>: {fave.beerScore} stars</span> : <span></span>}
              </div>
              {fave.beerNote !== '' ? <div>Notes: {fave.beerNote}</div> : <span></span>}
              <form className="delete-fave-form" onSubmit={(e) => this.deleteFave(e)}>
                <input type="hidden" name="faveName" value={fave.name} title={fave.beerScore} />
                <button type="submit" className="delete-button" value={fave.name}>Remove</button>
              </form>
            </div>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  let beerList
  if (state.getUserReducer.user.beerlist) {
    beerList = state.getUserReducer.user.beerlist
  }
  else {
    beerList = []
  }

  let beerrating
    if (state.getUserReducer.user.beerRating) {
      beerrating = state.getUserReducer.user.beerRating
    }
    else {
      beerrating = []
    }
  return {
      beers: state.specificBeerReducer.beers,
      beerlist: state.addSpecificBeerReducer.beerlist,
      bosslist: beerList,
      beerRating: beerrating
  }
}

export default connect(mapStateToProps)(BossList)
