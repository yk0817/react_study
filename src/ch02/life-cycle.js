var React = require('react');
var ReactDOM = require('react-dom');

var TextAreaCounter = React.createClass({
  _log: function(methodName, args) {
    console.log(methodName, args);
  },
  componentWillUpdate: function() {this._log('componentWillUpdate', arguments);},
  componentDidUpdate: function() {this._log('componentDidUpdate', arguments);},
  componentWillMount: function() {this._log('componentWillMount', arguments);},
  componentDidMount: function() {this._log('componentDidMount', arguments);},
  componentWillUnmount: function() {this._log('componentWillUnmount', arguments);},
  
  propTypes: {
    defaultValue: React.PropTypes.string,
  },
  
  getInitialState: function() {
    return {
      text: this.props.defaultValue,
    };
  },
  
  _textChange: function(ev) {
    this.setState({
      text: ev.target.value,
    });
  },
  
  render: function() {
    return React.DOM.div(null,
      React.DOM.textarea({
        value: this.state.text,
        onChange: this._textChange,
      }),
      React.DOM.h3(null, this.state.text.length)
    );
  }
});

var myTextAreaCounter = ReactDOM.render(
  React.createElement(TextAreaCounter,{
    defaultValue: "ボブ",
  }),
  document.getElementById("app")
);