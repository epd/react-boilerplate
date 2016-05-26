import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import reducers from './reducers';
import App from './components/App';


const store = createStore(reducers);
ReactDOM.render(<App store={store} />, document.getElementById('main'));
