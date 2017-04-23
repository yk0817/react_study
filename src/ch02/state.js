var React = require('react');
var ReactDOM = require('react-dom');

var TextAreaCounter = React.createClass({
  propTypes: {
    defaultValue: React.PropTypes.string,
  },
  getInitialState: function(){
    return {
      text: this.props.defaultValue
    };
  },
  _textChange: function(ev){
    this.setState({
      text: ev.target.value,
    });
  },
  componentWillReceiveProps: function(newProps) {
    this.setState({
      text: newProps.defaultValue,
    });
  },
  render: function(){
    return React.DOM.div(null,
      React.DOM.textarea({
        value: this.state.text,
        onChange: this._textChange,
      }),
      React.DOM.h3(null,this.state.text.length)
    );
  }
});

var myTextAreaCounter = ReactDOM.render(
  React.createElement(TextAreaCounter,{
    defaultValue: "ボブ",
  }),
  document.getElementById("app")
);