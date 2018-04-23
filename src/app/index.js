import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './container/App';
import HomePage from './container/HomePage';
import About from './components/About/About';
import * as HomeActions from './actions/HomeActions';

store.dispatch(HomeActions.GetDemoUsers());

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App} >
                <IndexRoute component={HomePage} />
                <Route path="about" component={About} />
            </Route>
        </Router>
    </Provider>,
    window.document.getElementById('app')
    );
