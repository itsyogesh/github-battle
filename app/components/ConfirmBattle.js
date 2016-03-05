var React = require('react');
var PropTypes = React.PropTypes;

function check(obj){
  return <pre>{JSON.stringify(obj, null, ' ')}</pre>
}

var ConfirmBattle = React.createClass({
  propTypes: {
    isLoading: PropTypes.bool.isRequired,
    playersInfo: PropTypes.array.isRequired,
    onInitiateBattle: PropTypes.func.isRequired
  }
  render: function(){
    return this.props.isLoading === true
    ? <p>Loading..</p>
  : <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
    <h1>Confirm Players</h1>
    <div className="col-sm-8 col-sm-offset-2">
      <div className="col-sm-6">
        <p className="lead">Player 1</p>
          check(obj.playersInfo[0])
      </div>
    </div>
  </div>
  }
})


module.exports = ConfirmBattle;
