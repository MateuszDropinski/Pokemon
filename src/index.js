import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { injectGlobal } from 'styled-components';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

injectGlobal`
    *
    {
        box-sizing:border-box;
    }
    body,html
    {
        font-size:62.5%;
        margin:0px;
    }
`

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App />   
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
