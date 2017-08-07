import React, { Component } from 'react';
import { addSpecificBeer, saveRating, deleteToTry, deleteFave } from '../../actions';
import { connect } from 'react-redux';
import SpecificBeer from './SpecificBeer'
import '../../App.css';

class BossList extends Component {
  constructor() {
    super()

    this.addFave = this.addFave.bind(this)
    this.deleteToTry = this.deleteToTry.bind(this)
  }

  addFave(event) {
    event.preventDefault();
    console.log('yep')
    const nameOfFave = event.target.beerName.value
    console.log(nameOfFave)
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
      <div className="bossList">
        <h2 className="bossListHeader">Boss List</h2>
        <h3 className="bossListSubheader">Here are your Beers To Try...</h3>
        <hr className="bossListHr"/>
        {this.props.bosslist.map((beer, index) => {
        return (
            <div key={index}>
                <div className="bossListItems">{beer}</div>
              <div className="bossListFormsDiv">
              <form className="addFaveForm" onSubmit={(e) => this.addFave(e)}>
                <input type="hidden" name="beerName" value={beer} />
                <button type="submit" className="addFaveButton flash-button" onSubmit={(e) => this.deleteToTry(e)} value={beer}>Favorite</button>
              </form>
              <form className="deleteToTryForm" onSubmit={(e) => this.deleteToTry(e)}>
                <input type="hidden" name="beername" value={beer} />
                <button type="submit" className="deleteButton" value={beer}>Remove</button>
              </form>
              </div>
            </div>
        )
      })}
      <h3 className="bossListSubheader">Here are your Favorite Beers!</h3>
      <hr className="bossListHr"/>
      {this.props.beerRating.map((fave, index) => {
      return (
          <div key={index}>

            <div className="bossListItems">{fave}</div>
            <form className="deleteFaveForm" onSubmit={(e) => this.deleteFave(e)}>
              <input type="hidden" name="faveName" value={fave} />
              <button type="submit" className="deleteButton" value={fave}>Remove</button>
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
