import React, { Component } from 'react';
import { addSpecificBeer } from '../../actions';
import { connect } from 'react-redux';
import SpecificBeer from './SpecificBeer'
import '../../App.css';
//here we will have the master list.  you will also rank your beers on the list here
class BossList extends Component {

  render() {

    return (
      <div className="bossList">
        <h2 className="bossListHeader">Boss List</h2>
        <p>Coors</p>
        <p>Bud</p>
        <p>{this.props.beerList}</p>
        <button className="saveBeerButton">Save</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
	console.log(state);
		return {beers: state.specificBeerReducer.beers,
						beerList: state.addSpecificBeerReducer.beerList}
}

export default connect(mapStateToProps)(BossList);
