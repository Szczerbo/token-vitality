import React, { Component } from "react";

import Auxiliary from './hoc/Auxiliary/Auxiliary';
import NavigationBar from './components/NavigationBar/NavigationBar';
import { TokenMetricsContainer } from './containers/TokenMetricsContainer';

class App extends Component {

  render() {
    return (
      <Auxiliary>
        <NavigationBar />
        <TokenMetricsContainer />
      </Auxiliary>
    );
  }
}

export default App;
