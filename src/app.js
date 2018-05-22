//import 'bootstrap/dist/css/bootstrap.css';
//import 'font-awesome/css/font-awesome.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home/Home.jsx';
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from "./reducers/index.jsx";
import {IntlProvider } from 'react-intl';
import './app.css';

class App extends React.Component {

  render () {
      const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <IntlProvider locale="en">
         <Home/>
        </IntlProvider>
    </Provider>
  );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
