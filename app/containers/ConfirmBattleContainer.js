var React = require('react');
var Battle = require('../components/Battle');

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