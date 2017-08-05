import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import { calculator } from './reducers';

const store = createStore(calculator);

const rootElement = document.getElementById('root')

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>,
rootElement);
registerServiceWorker();
