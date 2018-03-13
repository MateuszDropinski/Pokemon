import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { injectGlobal } from 'styled-components';
import { media } from './data/media_style';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

injectGlobal`
    *
    {
        box-sizing:border-box;
    }
    html
    {
        font-size:100%;
        ${media.md`font-size:110%;`}
    }
    body
    {
        font-family: 'Montserrat', sans-serif;
        margin:0px;
        background-color:rgba(187, 247, 255, 0.2);
        ${media.md`padding:20px;`}
        ${media.lg`padding:20px 100px;`}
    }
`;

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App />   
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
