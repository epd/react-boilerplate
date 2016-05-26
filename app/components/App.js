import React, { Component, PropTypes } from 'react';

import { basicAction } from '../actions';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props.store;

    dispatch(basicAction());
  }

  render() {
    return <h1>Rendered from ./app/components/App.js!</h1>;
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;

