var React = require('react');
var ReactDOM = require('react-dom');
var ExecutionEnvironment = require('exenv');
var IconicJs = ExecutionEnvironment.canUseDOM && require('../vendor/iconic.min');
var createReactClass = require("create-react-class");

var Iconic = createReactClass({
  inject: function () {
    var ico = IconicJs();
    ico.inject(ReactDOM.findDOMNode(this));
  },
  componentDidMount: function () {
    this.inject();
  },
  componentDidUpdate: function () {
    this.inject();
  },
  render: function () {
    return React.Children.only(this.props.children);
  }
});

module.exports = Iconic;
