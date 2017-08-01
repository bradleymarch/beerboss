import React from 'react'
import { connect } from 'react-redux';

const Root = (props) => {

  <div>
    <nav className="App-header">

    <img src={require("../beer.png")} className="Beer-img App-logo" alt="Beer"/>
      {props.children}
    </nav>
  </div>
};

export default connect()(Root);
