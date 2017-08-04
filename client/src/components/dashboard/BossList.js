import React, { Component } from 'react';
import { addSpecificBeer } from '../../actions';
import { connect } from 'react-redux';
import SpecificBeer from './SpecificBeer'
import '../../App.css';

class BossList extends Component {
  constructor() {
    super()

    this.refresh = this.refresh.bind(this)

  }
  refresh() {
    location.href = "/dashboard/dashboard_section"
  }
  render() {

    return (
      <div className="bossList">
        <h2 className="bossListHeader">Boss List</h2>

        {this.props.bosslist}

        <p>{this.props.beerlist}</p>
        <form>
          <button onClick={() => this.refresh()} className="saveBeerButton">Save</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {

		return {beers: state.specificBeerReducer.beers, beerlist: state.addSpecificBeerReducer.beerlist, bosslist: state.getUserReducer.user.beerlist}

}

export default connect(mapStateToProps)(BossList);
