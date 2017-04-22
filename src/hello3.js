var React = require('react');
var ReactDOM = require('react-dom');

var Component = React.createClass({
  render: function() {
    return React.DOM.span(null, "カスタムコンポーネント");
  }
});
ReactDOM.render(
  React.createElement(Component),
  document.getElementById("app")
);