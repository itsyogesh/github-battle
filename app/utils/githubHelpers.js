var axios = require('axios');

function getUserInfo(username){
  var params = {
    client_id: process.env.GITHUB_CLIENT_ID,
    secret_id: process.env.GITHUB_SECRET_ID,
    queryParams: "?client_id=" + this.client_id + "&secret_id=" + this.secret_id
  }
  return axios.get('https://api.github.com/users/' + username + params.queryParams);
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
  }
}

module.exports = helpers;
