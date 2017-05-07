import React from 'react';
import { render } from 'react-dom';
//import css
import css from './styles/style.styl';

// Components
import App from './components/App';
import InfographicSingle from './components/InfographicSingle';
import InfographicGrid from './components/InfographicGrid';

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
      <IndexRoute component={InfographicGrid}></IndexRoute>
      <Route path="/view/:infographicId" component={InfographicSingle}></Route>
      </Route>
    </Router>
  </Provider>

)

render (router, document.getElementById('root'));
