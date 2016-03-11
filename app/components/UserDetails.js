var React = require('react');
var PropTypes = React.PropTypes;

var UserDetails = React.createClass({
  propTypes: {
    score: PropTypes.number,
    info: PropTypes.shape({
      avatar_url: PropTypes.string.isRequired,
      blog: PropTypes.string,
      company: PropTypes.string,
      followers: PropTypes.number.isRequired,
      following: PropTypes.number.isRequired,
      location: PropTypes.string,
      login: PropTypes.string.isRequired,
      name: PropTypes.string,
      public_repos: PropTypes.number.isRequired
    })
  },
  render: function(){
    var user = this.props;
    return (
      <div>
        {!!user.score && <li className="list-group-item"><h3>Score: {user.score}</h3></li>}
        <li className="list-group-item"> <img src={user.info.avatar_url} className="img-rounded img-responsive"/></li>
        {user.info.name && <li className="list-group-item"><h3>Name: {user.info.name}</h3></li>}
        <li className="list-group-item"><h3>Username: {user.info.login}</h3></li>
        {user.info.location && <li className="list-group-item"><h3>Location: {user.info.location}</h3></li>}
        {user.info.company && <li className="list-group-item"><h3>Company: {user.info.company}</h3></li>}
        <li className="list-group-item"><h3>Followers: {user.info.followers}</h3></li>
        <li className="list-group-item"><h3>Following: {user.info.following}</h3></li>
        <li className="list-group-item"><h3>Public Repos: {user.info.public_repos}</h3></li>
        {user.info.blog && <li className="list-group-item"><h3>Blog: {user.info.blog}</h3></li>}
      </div>
    )
  }
});

module.exports = UserDetails;
