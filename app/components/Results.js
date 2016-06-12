var React = require('react');
var PropTypes = React.PropTypes;

function Results(props) {
  return <div>{dump(props)}</div>
}

function dump (obj) {
  return <pre>{JSON.stringify(obj, null, ' ')}</pre>
}

Results.propTypes = {
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired
}

module.exports = Results;