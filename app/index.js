var React = require('react');
var ReacrDOM = require('react-dom');
var routes = require('./config/routes');

ReacrDOM.render(
  routes,
  document.getElementById('app')
);