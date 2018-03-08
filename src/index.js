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
    body
    {
        font-size:62.5%;
        font-family: 'Bitter', serif;
        margin:0px;
        background-color:rgba(187, 247, 255, 0.2);
        ${media.xs`font-size:70%;`}
        ${media.sm`font-size:80%;padding:10px;`}
        ${media.md`font-size:90%;padding:20px;`}
        ${media.lg`font-size:100%;padding:30px;`}
    }
`;

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App />   
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
