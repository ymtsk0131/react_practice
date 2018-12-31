import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { composeWithDevTools } from 'redux-devtools-extension'

import './index.css';
import reducer from './reducers'
import EventsIndex from './components/events_index';
import EventsNew from './components/events_new';
import registerServiceWorker from './registerServiceWorker';

const enhancer = process.env.NODE_ENV === 'development' ?
    composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk)
const store = createStore(reducer, enhancer)

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/events/new" component={EventsNew} />
                <Route exact path="/" component={EventsIndex} />
            </Switch>
        </BrowserRouter>
    </Provider>,
     document.getElementById('root')
);
registerServiceWorker();
