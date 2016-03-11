var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');
var UserDetails = require('./UserDetails');
var UserDetailsWrapper = require('./UserDetailsWrapper');
var Link = require('react-router').Link;

function StartOver() {
  return (
    <div className="col-sm-12" style={styles.space}>
      <Link to="/playerOne">
        <button type="button" className="btn btn-lg btn-danger">Start Over</button>
      </Link>
    </div>
  )
}

var Results = React.createClass({
  propTypes: {
    isLoading: PropTypes.bool.isRequired,
    playersInfo: PropTypes.array.isRequired,
    scores: PropTypes.array.isRequired
  },
  render: function() {
    if(this.props.isLoading) {
      return (
        <p>Loading...</p>
      )
    }

    if(this.props.scores[0] === this.props.scores[1]){
      return (
        <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
          <h1>It's a tie</h1>
          <StartOver />
        </div>
      )
    }

    var winningIndex = this.props.scores[0] > this.props.scores[1] ? 0 : 1;
    var losingIndex = winningIndex === 0 ? 1 : 0;

    return (
      <div className="jumbotron col-sm-12 text-center"
        style={styles.transparentBg}>
        <h1>Results</h1>
        <div className="col-sm-8 col-sm-offset-2">
          <UserDetailsWrapper header="Winner">

            <UserDetails
              score={this.props.scores[winningIndex]}
              info={this.props.playersInfo[winningIndex]}/>

        </UserDetailsWrapper>
          <UserDetailsWrapper header="Loser">

            <UserDetails
              score={this.props.scores[losingIndex]}
              info={this.props.playersInfo[losingIndex]}/>

        </UserDetailsWrapper>
        </div>
        <StartOver />
      </div>
    );
  }

});

module.exports = Results;
