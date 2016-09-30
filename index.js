import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './lib/App'
import Board  from './lib/Board'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/board" component={Board}/>
    </Route>
  </Router>
), document.getElementById('app'))
