import React from 'react';
import ReactDOM from 'react-dom';
import SimpleExample from './SimpleExample';
import SecondExample from './SecondExample';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<SimpleExample />, document.getElementById('root'));
ReactDOM.render(<SecondExample />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
