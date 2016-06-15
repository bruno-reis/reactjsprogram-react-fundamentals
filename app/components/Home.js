var React = require('react');
var ReactRouter = require('react-router');
var MainContainer = require('./MainContainer');
var Link = ReactRouter.Link;

var Home = React.createClass({
  render: function() {
    return (
      <MainContainer>
        <h1>Github Battle</h1>
        <p className="lead">Motto</p>
        <Link to='/playerOne'>
          <button type="button" className="btn btn-large btn-success">
            Start!
          </button>
        </Link>
      </MainContainer>
    )
  }
});

module.exports = Home;