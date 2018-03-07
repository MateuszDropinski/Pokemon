import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { injectGlobal } from 'styled-components';
import ReduxPromise from 'redux-promise';
import { media } from './data/media_style';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

injectGlobal`
    *
    {
        box-sizing:border-box;
    }
    body,html
    {
        font-size:62.5%;
        font-family: 'Raleway', sans-serif;
        margin:0px;
        ${media.xs`font-size:70%;`}
    }
`;

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App />   
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
