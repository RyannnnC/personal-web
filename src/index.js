import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {store, updateFrame, birdjump, game, states, rungame } from './helpers/store';

ReactDOM.render(
  <React.StrictMode>
    <App store={store} updateFrame={updateFrame} game={game} stats={states} rungame={rungame} birdjump={birdjump}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
