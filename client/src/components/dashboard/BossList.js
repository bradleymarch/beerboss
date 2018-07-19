import React, { Component } from 'react'; import { addSpecificBeer, saveRating,
deleteToTry, deleteFave } from '../../actions'; import { connect } from
'react-redux'; import SpecificBeer from './SpecificBeer' import '../../App.css';

class BossList extends Component {
  constructor() {
    super()

    this.addFave = this.addFave.bind(this)
    this.deleteToTry = this.deleteToTry.bind(this)
  }

  addFave(event) {
    event.preventDefault();
    const nameOfFave = event.target.beerName.value
    this.props.dispatch(saveRating(nameOfFave))
    this.props.dispatch(deleteToTry(nameOfFave))
    location.href = "/dashboard/dashboard_section"
  }
  deleteToTry(event) {
    event.preventDefault();
    const nameToDelete = event.target.beername.value
    this.props.dispatch(deleteToTry(nameToDelete))
    location.href = "/dashboard/dashboard_section"
  }
  deleteFave(event) {
    event.preventDefault();
    const faveToDelete = event.target.faveName.value
    this.props.dispatch(deleteFave(faveToDelete))
    location.href = "/dashboard/dashboard_section"
  }

  render() {

    return (
      <div className="boss-list">
        <h2 className="boss-list-header">Boss List</h2>
        <h3 className="boss-list-subheader">Here are your Beers To Try...</h3>
        <hr className="boss-list-hr"/>
        {this.props.bosslist.map((beer, index) => {
        return (
            <div key={index}>
                <div className="boss-list-items">{beer}</div>
              <div className="boss-list-forms-div">
              <form className="add-fave-form" onSubmit={(e) => this.addFave(e)}>
                <input type="hidden" name="beerName" value={beer} />
                <button type="submit" className="add-fave-button flash-button" onSubmit={(e) => this.deleteToTry(e)} value={beer}>Favorite</button>
              </form>
              <form className="delete-to-try-form" onSubmit={(e) => this.deleteToTry(e)}>
                <input type="hidden" name="beername" value={beer} />
                <button type="submit" className="delete-button" value={beer}>Remove</button>
              </form>
              </div>
            </div>
        )
      })}
      <h3 className="boss-list-subheader">Here are your Favorite Beers!</h3>
      <hr className="boss-list-hr"/>
      {this.props.beerRating.map((fave, index) => {
      return (
          <div key={index}>

            <div className="boss-list-items">{fave}</div>
            <form className="delete-fave-form" onSubmit={(e) => this.deleteFave(e)}>
              <input type="hidden" name="faveName" value={fave} />
              <button type="submit" className="delete-button" value={fave}>Remove</button>
            </form>
          </div>
        )
      })}

        </div>
    )
  }
}

const mapStateToProps = (state) => {

  let beerList;

    if (state.getUserReducer.user.beerlist) {
      beerList = state.getUserReducer.user.beerlist
    }
    else {
      beerList = []
    }

    let beerrating;

      if (state.getUserReducer.user.beerRating) {
        beerrating = state.getUserReducer.user.beerRating
      }
      else {
        beerrating = []
      }

  return {beers: state.specificBeerReducer.beers,
          beerlist: state.addSpecificBeerReducer.beerlist,
          bosslist: beerList,
          beerRating: beerrating,}

}

export default connect(mapStateToProps)(BossList);
