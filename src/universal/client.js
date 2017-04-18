import 'babel-polyfill';
import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import LandingPage from './../browser/pages/a-spec/landing-page/landingPage';
import LandingPageB from './../browser/pages/b-spec/landing-page/landingPage';

if (process.env.BROWSER) {
    require('../browser/styles/scss/all.scss');
}

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={LandingPage} />
        <Route path="/b" component={LandingPageB} />
    </Router>,
    document.getElementById('content')
);
