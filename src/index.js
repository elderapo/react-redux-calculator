import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

import { calculator } from './reducers';

// const store = createStore(calculator);

const store = createStore(
    calculator,
    applyMiddleware(logger)
);

const rootElement = document.getElementById('root')

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement);
registerServiceWorker();
