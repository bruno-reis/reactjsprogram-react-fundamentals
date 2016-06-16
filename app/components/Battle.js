var React = require('react');
var PropTypes = React.PropTypes;
var Link  = require('react-router').Link;
var styles = require('../styles');
var MainContainer = require('./MainContainer');
var UserDetails = require('./UserDetails');
var UserDetailsWrapper = require('./UserDetailsWrapper');
var Loading = require('./Loading');

function Battle (props) {
  return props.isLoading === true
    ? <Loading speed={200} text='Fetching Data'/>
    : <MainContainer>
        <h1>Confirm Players</h1>
        <div className="col-sm-8 col-sm-offset-2">
          <UserDetailsWrapper header="Player One">
            <UserDetails info={props.playersInfo[0]} />
          </UserDetailsWrapper>
          <UserDetailsWrapper header="Player Two">
            <UserDetails info={props.playersInfo[1]} />
          </UserDetailsWrapper>
        </div>
        <div className="col-sm-8 col-sm-offset-2">
          <div className="col-sm-12" style={styles.space}>
            <button type="button" className="btn btn-success btn-large"
                    onClick={props.onInitiateBattle}>
                    Initiate Battle!
            </button>
          </div>
          <div className="col-sm-12" style={styles.space}>
            <Link to="/playerOne">
              <button type="button" className="btn btn-danger btn-lg">Reselect Players</button>
            </Link>
          </div>
        </div>
      </MainContainer>
}

Battle.propType = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  onInitiateBattle: PropTypes.func.isRequired
};

module.exports = Battle;