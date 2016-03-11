var axios = require('axios');

var githubParams = {
  client_id: process.env.GITHUB_CLIENT_ID,
  secret_id: process.env.GITHUB_SECRET_ID,
  queryParams: "?client_id=" + this.client_id + "&secret_id=" + this.secret_id
}

function getUserInfo(username){

  return axios.get('https://api.github.com/users/' + username + githubParams.queryParams);
}

function getRepos (username) {
  return axios.get('https://api.github.com/users/' + username + '/repos' + githubParams.queryParams + '&per_page=100');
}

function getTotalStars (repos) {
  return repos.data.reduce(function(prev, current){
    return prev + current.stargazers_count
  }, 0);
}

function getPlayerData (player) {
  return getRepos(player.login)
    .then(getTotalStars)
    .then(function(totalStars){
      return {
        followers: player.followers,
        totalStars: totalStars
      }
    })
}

function calculateScores (players) {
  return [
    players[0].followers * 3 + players[0].totalStars,
    players[1].followers * 3 + players[1].totalStars,
  ]
}


var helpers = {
  getPlayersInfo : function(players){
    return axios.all(players.map(function(username){
      console.log(getUserInfo(username));
      return getUserInfo(username);
    }))
    .then(function(info){
      return info.map(function (user){
        return user.data;
      })
    })
    .catch(function(err){
      console.warn("Error in getPlayerInfo", err);
    })
  },
  battle: function(players) {
    var playerOneData = getPlayerData(players[0]);
    var playerTwoData = getPlayerData(players[1]);

    return axios.all([playerOneData, playerTwoData])
      .then(calculateScores)
      .catch(function(err){
        console.warn('Error in getPlayersInfo: ' + err)
      })
  }
}

module.exports = helpers;
