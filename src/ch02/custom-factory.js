var React = require('react');
var ReactDOM = require('react-dom');

var Component = React.createClass({
  render: function(){
    return React.DOM.span(null,"I am so custom");
  }
});

var ComponentFactory = React.createFactory(Component);

ReactDOM.render(
  ComponentFactory(),
  document.getElementById("app")
);