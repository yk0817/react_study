var React = require('react');
var ReactDOM = require('react-dom');

ReactDOM.render(
  React.DOM.h1(
    {id: "my-heading"},
    React.DOM.span(null,
      React.DOM.em(null,"hell"),
      "o"
    ),
    "world"
  ),
  document.getElementById("app")
);