var React = require('react');
var ReacrDOM = require('react-dom');

var HelloWorld = React.createClass({
  render: function () {
    return (
      <div> Hello React World </div>
    )
  }
});

ReacrDOM.render(
  <HelloWorld />,
  document.getElementById('app')
);