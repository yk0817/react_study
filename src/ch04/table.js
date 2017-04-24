var React = require('react');
var ReactDOM = require('react-dom');

var Excel = Rect.createClass({
  displayName: 'Excel',
  
  propTypes: {
    headers: React.PropTypes.arrayOf(
      React.PropTypes.string
    ),
    initialData: React.PropTypes.arrayOf(
      React.PropTypes.arrayOf(
        React.PropTypes.string
        
      )
    ),
  },
  
})