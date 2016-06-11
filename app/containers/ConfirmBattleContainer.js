var React = require('react');
var Battle = require('../components/Battle');
var githunHelpers = require('../utils/githubHelpers');

var ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      isLoading: true,
      playerInfo: []
    }
  },
  componentDidMount: function() {
    var query = this.props.location.query;
    githunHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
      .then( players => this.setState({
        isLoading: false,
        playersInfo: [players[0], players[1]]
        })
      )
  },
  render: function() {
    return (
      <Battle 
        isLoading={this.state.isLoading}
        playersInfo={this.state.playerInfo} />
    );
  }
});

module.exports = ConfirmBattleContainer