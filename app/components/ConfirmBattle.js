var React = require('react')

var ConfirmBattle = React.createClass({
  render: function(){
    return this.props.isLoading === true
    ? <p>Loading..</p>
    : <p>Confirm Battle</p>
  }
})

module.exports = ConfirmBattle;
