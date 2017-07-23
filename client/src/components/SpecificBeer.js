import React from 'react'
import { connect } from 'react-redux';
//search specific beer _______  to breweryDB for GET json
export class SpecificBeer extends React.Component {
	constructor(props) {
		super(props)
		this.state = { beers: [] }
	}
		return (
			<p>
			{this.state.beers}
			</p>
		)
	}
const mapStateToProps = state => ({

		state: state.beers
})



	export default connect(mapStateToProps)(SpecificBeer);
