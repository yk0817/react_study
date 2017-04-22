var React = require('react');
var ReactDOM = require('react-dom');

var  TextAreaCounter = React.createClass({
  
  propTypes: {
    defaultValue: React.PropTypes.string,
  },
  getDefaultProps: function() {
    return {
      text: '',
    };
  },
  
  getDefaultProps: function(){
    return {
      text: '',
    };
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
  
  render: function(){
    return React.DOM.div(null,
      React.DOM.textarea({
        value: this.state.text,
        onChange: this._textChange,
      }),
      React.DOM.h3(null, this.state.text.length)
    );
  }
});

ReactDOM.render(
  React.createElement(TextAreaCounter,{
    text: "ボブ",
  }),
  document.getElementById("app")
);
