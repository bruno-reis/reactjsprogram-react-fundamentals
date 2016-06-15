var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');
var MainContainer = require('./MainContainer');
var UserDetails = require('./UserDetails');
var UserDetailsWrapper = require('./UserDetailsWrapper');
var Link = require('react-router').Link;

function StartOver() {
  return (
    <div className="col-sm-12" style={styles.space}>
      <Link to='/playerOne' >
        <button type="button" className="btn btn-lg btn-danger">Start Over</button>
      </Link>
    </div>
  )
}

function Results(props) {
  if (props.isLoading === true) {
    return (
      <p> Loading!</p>
    )
  }

  if (props.scores[0] === props.scores[1]) {
    return (
      <MainContainer>
        <h1>Tie Game...</h1>
        <StartOver />
      </MainContainer>
    )
  }

  var winIndex = props.scores[0] > props.scores[1] ? 0 : 1;
  var loserIndex = winIndex === 0 ? 1 : 0;
  return (
    <MainContainer>
      <h1>Results</h1>
      <div className="col-sm-8 col-sm-offset-2">
        <UserDetailsWrapper header="Winner">
          <UserDetails score={props.scores[winIndex]} info={props.playersInfo[winIndex]} />
        </UserDetailsWrapper>
        <UserDetailsWrapper header="Loser">
          <UserDetails score={props.scores[loserIndex]} info={props.playersInfo[loserIndex]} />
        </UserDetailsWrapper>
      </div>
      <StartOver />
    </MainContainer>
  )
}

Results.propTypes = {
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired
};

module.exports = Results;