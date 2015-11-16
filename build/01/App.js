"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = (function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(App).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "btn-group btn-group-lg" },
        React.createElement(Info, { label: "One", counter: 42 }),
        React.createElement(Warning, { label: "Two" }),
        React.createElement(Danger, { label: "Danger" })
      );
    }
  }]);

  return App;
})(React.Component);

var Info = (function (_React$Component2) {
  _inherits(Info, _React$Component2);

  function Info() {
    _classCallCheck(this, Info);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Info).apply(this, arguments));
  }

  _createClass(Info, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "button",
        { className: "btn btn-info" },
        this.props.label,
        " ",
        React.createElement(Badge, { counter: this.props.counter })
      );
    }
  }]);

  return Info;
})(React.Component);

var Warning = (function (_React$Component3) {
  _inherits(Warning, _React$Component3);

  function Warning() {
    _classCallCheck(this, Warning);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Warning).apply(this, arguments));
  }

  _createClass(Warning, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "button",
        { className: "btn btn-warning" },
        this.props.label
      );
    }
  }]);

  return Warning;
})(React.Component);

var Danger = (function (_React$Component4) {
  _inherits(Danger, _React$Component4);

  function Danger() {
    _classCallCheck(this, Danger);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Danger).apply(this, arguments));
  }

  _createClass(Danger, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "button",
        { className: "btn btn-danger" },
        this.props.label
      );
    }
  }]);

  return Danger;
})(React.Component);

var Badge = (function (_React$Component5) {
  _inherits(Badge, _React$Component5);

  function Badge() {
    _classCallCheck(this, Badge);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Badge).apply(this, arguments));
  }

  _createClass(Badge, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "span",
        { className: "badge" },
        this.props.counter
      );
    }
  }]);

  return Badge;
})(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('xi-react'));