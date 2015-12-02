'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Row = (function (_React$Component) {
  _inherits(Row, _React$Component);

  function Row() {
    _classCallCheck(this, Row);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Row).apply(this, arguments));
  }

  _createClass(Row, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "row" },
        this.props.children
      );
    }
  }]);

  return Row;
})(React.Component);

var Col = (function (_React$Component2) {
  _inherits(Col, _React$Component2);

  function Col() {
    _classCallCheck(this, Col);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Col).apply(this, arguments));
  }

  _createClass(Col, [{
    key: "render",
    value: function render() {
      var cls = "col-xs-" + this.props.w;
      return React.createElement(
        "div",
        { className: cls },
        this.props.children
      );
    }
  }]);

  return Col;
})(React.Component);

var Panel = (function (_React$Component3) {
  _inherits(Panel, _React$Component3);

  function Panel() {
    _classCallCheck(this, Panel);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Panel).apply(this, arguments));
  }

  _createClass(Panel, [{
    key: "render",
    value: function render() {
      var heading = this.props.heading ? React.createElement(
        "div",
        { className: "panel-heading" },
        this.props.heading
      ) : null;

      return React.createElement(
        "div",
        { className: "panel panel-default" },
        heading,
        React.createElement(
          "div",
          { className: "panel-body" },
          this.props.children
        )
      );
    }
  }]);

  return Panel;
})(React.Component);

var App = (function (_React$Component4) {
  _inherits(App, _React$Component4);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(App).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return React.createElement(
        Row,
        null,
        React.createElement(
          Col,
          { w: "4" },
          React.createElement(
            Panel,
            { heading: "Left Side" },
            "Four Column Panel"
          )
        ),
        React.createElement(
          Col,
          { w: "8" },
          React.createElement(
            Panel,
            { heading: "Right Side" },
            "Eight Column Panel"
          )
        )
      );
    }
  }]);

  return App;
})(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('xi-react'));