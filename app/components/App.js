import React from 'react';
import { Component } from 'react';

import { basicAction } from '../actions';

export default class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props.store;

    dispatch(basicAction());
  }

  render() {
    return <h1>Rendered from ./app/components/App.js!</h1>
  }
};
