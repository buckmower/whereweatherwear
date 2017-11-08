import React, { Component } from 'react';
import { createStore, compose, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import wWWReducer from './reducers/www';
import WeatherSection from './containers/WeatherSection';
import './styles/App.css';

export default class App extends Component {
  render() {
    const composeEnhancers =
      typeof window === 'object' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
    const enhancer = composeEnhancers(
      applyMiddleware(thunk),
    );
    const clientStore = createStore(wWWReducer, enhancer);
    return (
      <Provider store={clientStore}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Where Weather Wear: What to Wear According to the Weather - Wherever You Are!</h1>
          </header>
          <WeatherSection />
        </div>
      </Provider>
    );
  }
}
