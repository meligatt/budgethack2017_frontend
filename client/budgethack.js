import React from 'react';
import { render } from 'react-dom';
//import css
import css from './styles/style.styl';

// Components
import App from './components/app';
// import InfographicSingle from './components/infographicSingle';
// import InfographicGrid from './components/infographicGrid';

import Departments from './components/departments';
import Programs from './components/programs';


// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  // <Provider store={store}>
  //   <Router history={history}>
  //     <Route path="/" component={App}>
  //     <IndexRoute component={InfographicGrid}></IndexRoute>
  //     <Route path="/view/:infographicId" component={InfographicSingle}></Route>
  //     </Route>
  //   </Router>
  // </Provider>
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Departments}></IndexRoute>
        <Route path="/programs" component={Programs}></Route>
      </Route>
    </Router>
  </Provider>
)

render (router, document.getElementById('root'));
