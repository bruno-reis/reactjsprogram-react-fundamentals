var axios = require('axios');

function getUserInfo (username) {
  "use strict";
  return axios.get('https:/api.github.com/users/' + username)
}
var helpers = {
  getPlayersInfo: function (players) {
    "use strict";
    return axios.all(players.map( username => getUserInfo(username) ))
      .then( info => info.map( user => user.data))
      .catch( err => console.warn('Error in getPlayersInfo', err))
  }
};

module.exports = helpers;