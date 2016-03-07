var React = require('react');
var PropTypes = React.PropTypes;

var UserDetails = React.createClass({
  propTypes: {
    score: PropTypes.number.isRequired,
    info: PropTypes.shape({
      avatar_url: PropTypes.string.isRequired
    })
  },
  render: function(){
    return (
      <div>
        {}
      </div>
    )
  }
});

module.exports = UserDetails;
