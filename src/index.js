import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import {BrowserRouter, Route } from 'react-router-dom';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

class Hello extends React.Component {
  render () { return <div>Hello!</div>}
}

class Goodbye extends React.Component {
  render () { return <div>Bye!</div>}
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <div>
          <Route path="/hello" component={Hello}/>
          <Route path="/goodbye" component={Goodbye}/>
        </div>
      </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
