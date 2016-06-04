const React = require('react');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');
var Home = require('../componentes/Home');

var routes = (
  <Router>
    <Route path='/' component={Main}>
      <Route path='/home' component={Home}> </Route>
    </Route>
  </Router>
)
