import React, { Component } from 'react';
import { addSpecificBeer, saveRatingSuccess } from '../../actions';
import { connect } from 'react-redux';
import SpecificBeer from './SpecificBeer'
import '../../App.css';

class BossList extends Component {
  constructor() {
    super()

    this.refresh = this.refresh.bind(this)
    this.rateBeer = this.rateBeer.bind(this)

  }
  refresh() {
    location.href = "/dashboard/dashboard_section"
  }
  rateBeer(event) {
    event.preventDefault();
    const ratingValue = event.target.value
    this.props.dispatch(saveRatingSuccess(ratingValue))
  }
  render() {

    return (
      <div className="bossList">
        <h2 className="bossListHeader">Boss List</h2>
        {this.props.bosslist.map((beer, index) => {
        return (
          <div key={index}>

            <div>Beer: {beer},

            <form className="ratingForm" onChange={(e) => this.rateBeer(e)}>
               <select className="ratingSelect" value={this.ratingSelect}>
                  <option value="Rating?">Rating?</option>
                  <option value="5 stars">5 stars</option>
                  <option value="4 stars">4 stars</option>
                  <option value="3 stars">3 stars</option>
                  <option value="2 stars">3 stars</option>
                  <option value="1 star">1 star</option>
               </select>
            </form>
            </div>

          </div>
        )
      })}
      {this.props.beerRating.map((rating, index) => {
      return (
        <div key={index}>

          <div>Rating: {rating}</div>

        </div>
      )
    })}
        <form>
          <button onClick={() => this.refresh()} className="saveBeerButton">Save</button>
        </form>
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
