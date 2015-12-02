'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Badge = (function (_React$Component) {
  _inherits(Badge, _React$Component);

  function Badge() {
    _classCallCheck(this, Badge);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Badge).apply(this, arguments));
  }

  _createClass(Badge, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'span',
        { className: 'badge' },
        this.props.val
      );
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      console.log('Badge will mount');
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log('Badge did mount');
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(p) {
      console.log('Badge gets props', 'PROP:' + (p && p.val));
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(p, s) {
      console.log('Badge updates', 'PROP:' + (p && p.val), 'STATE:' + (s && s.val));
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(p, s) {
      console.log('Badge has updated', 'PROP:' + (p && p.val), 'STATE:' + (s && s.val));
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount(p, s) {
      console.log('Badge leaves');
    }
  }]);

  return Badge;
})(React.Component);

var App = (function (_React$Component2) {
  _inherits(App, _React$Component2);

  function App() {
    _classCallCheck(this, App);

    var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this));

    _this2.state = { val: 'getting cape ...' };
    return _this2;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log('App did mount');

      window.setTimeout((function () {
        console.log('=== 1 ===');
        this.setState({ val: 'wearing cape ...' });
      }).bind(this), 2500);

      window.setTimeout((function () {
        console.log('=== 2 ===');
        this.setState({ val: 'flying ...' });
      }).bind(this), 5000);

      window.setTimeout((function () {
        console.log('=== 3 ===');
        this.setState({ val: 'landing ...' });
      }).bind(this), 7500);

      window.setTimeout((function () {
        console.log('=== 4 ===');
        this.setState({ val: '' });
      }).bind(this), 10000);
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      console.log('App will mount');
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(p) {
      console.log('App gets props', 'PROP:' + (p && p.val));
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(p, s) {
      console.log('App updates', 'PROP:' + (p && p.val), 'STATE:' + (s && s.val));
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(p, s) {
      console.log('App has updated', 'PROP:' + (p && p.val), 'STATE:' + (s && s.val));
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount(p, s) {
      console.log('App leaves');
    }
  }, {
    key: 'render',
    value: function render() {
      var heroes = ['Iron Man', 'Thor', 'Captain America', 'The Incredible Hulk', 'Black Widow'];
      var badge = undefined;
      if (this.state.val == '') {
        badge = null;
      } else {
        badge = React.createElement(Badge, { val: this.state.val });
      }
      return React.createElement(
        'ul',
        { className: 'list-group' },
        React.createElement(
          'li',
          { className: 'list-group-item list-group-item-success', ref: 'badgeContainer' },
          'Doctor Xing',
          badge
        ),
        heroes.map(function (hero) {
          return React.createElement(
            'li',
            { className: 'list-group-item list-group-item-default', key: hero },
            hero
          );
        })
      );
    }
  }]);

  return App;
})(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('xi-react'));