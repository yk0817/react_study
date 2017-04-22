var React = require('react');
var ReactDOM = require('react-dom');

var Component = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
  },
  render: function(){
    return React.DOM.span(null,"私は" + this.props.name + "です");
  }
})

ReactDOM.render(
  React.createElement(Component,{
    name: "ボブ",
  }),
  document.getElementById("app")
);