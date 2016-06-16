var axios = require('axios');

function getUserInfo (username) {
  "use strict";
  return axios.get('https:/api.github.com/users/' + username)
}

function getRepos(username) {
  return axios.get('https:/api.github.com/users/' + username + '/repos')
}

function getTotalStars(repos) {
  return repos.data.reduce( (prev, current) => prev + current.stargazers_count, 0 )
}

function getPlayersData(player) {
  return getRepos(player.login)
    .then(getTotalStars)
    .then( totalStars => {
      return {
        followers: player.followers,
        totalStars: totalStars
      }
    })
}

function calculateScores(players) {
  return [
    players[0].followers * 3 + players[0].totalStars,
    players[1].followers * 3 + players[1].totalStars
  ]
}

var helpers = {
  getPlayersInfo: function (players) {
    "use strict";
    return axios.all(players.map( username => getUserInfo(username) ))
      .then( info => info.map( user => user.data))
      .catch( err => console.warn('Error in getPlayersInfo', err))
  },

  battle: function (players) {
    var playerOneData = getPlayersData(players[0]);
    var playerTwoData = getPlayersData(players[1]);

    return axios.all([playerOneData, playerTwoData])
      .then(calculateScores)
      .catch( err => console.warn('Error in helpers/battle', err))
  }
};

module.exports = helpers;