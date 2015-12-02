'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function () {
  var heroes = ['Iron Man', 'Thor', 'Captain America', 'The Incredible Hulk', 'Black Widow', 'Hawkeye', 'Deadpool'];

  var callbacks = {};

  function on(ev, cb) {
    if (!callbacks[ev]) {
      callbacks[ev] = [];
    }
    callbacks[ev].push(cb);
  }

  function trigger(ev, payload) {
    if (callbacks[ev]) {
      callbacks[ev].forEach(function (cb) {
        cb(payload);
      });
    }
  }

  function getNextHero() {
    return heroes.length ? heroes.shift() : 'No more superheroes';
  }

  var AddButton = (function (_React$Component) {
    _inherits(AddButton, _React$Component);

    function AddButton() {
      _classCallCheck(this, AddButton);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(AddButton).apply(this, arguments));
    }

    _createClass(AddButton, [{
      key: 'render',
      value: function render() {
        return React.createElement(
          'button',
          { className: 'btn btn-danger', onClick: trigger.bind(this, 'ADD_HERO') },
          'Add Hero'
        );
      }
    }]);

    return AddButton;
  })(React.Component);

  var Hero = (function (_React$Component2) {
    _inherits(Hero, _React$Component2);

    function Hero() {
      _classCallCheck(this, Hero);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(Hero).apply(this, arguments));
    }

    _createClass(Hero, [{
      key: 'render',
      value: function render() {
        return React.createElement(
          'li',
          { className: 'list-group-item list-group-item-success' },
          this.props.hero
        );
      }
    }]);

    return Hero;
  })(React.Component);

  var App = (function (_React$Component3) {
    _inherits(App, _React$Component3);

    function App() {
      _classCallCheck(this, App);

      var _this3 = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this));

      _this3.state = {
        heros: [getNextHero(), getNextHero(), getNextHero()]
      };
      on('ADD_HERO', _this3.addHero.bind(_this3));
      return _this3;
    }

    _createClass(App, [{
      key: 'addHero',
      value: function addHero() {
        this.setState({
          heros: [].concat(_toConsumableArray(this.state.heros), [getNextHero()])
        });
      }
    }, {
      key: 'render',
      value: function render() {
        return React.createElement(
          'ul',
          { className: 'list-group' },
          this.state.heros.map(function (hero) {
            return React.createElement(Hero, { hero: hero });
          }),
          React.createElement(
            'li',
            { className: 'list-group-item list-group-item-default' },
            React.createElement(AddButton, null)
          )
        );
      }
    }]);

    return App;
  })(React.Component);

  ReactDOM.render(React.createElement(App, null), document.getElementById('xi-react'));
})();