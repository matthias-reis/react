'use strict'

// 1
// class App extends React.Component {
//   render() {
//     const heroes = [
//       'Iron Man',
//       'Thor',
//       'Captain America',
//       'The Incredible Hulk',
//       'Black Widow',
//       'Deadpool'
//     ];
//     return (
//       <ul className="list-group">
//         {heroes.map(hero => (
//           <li className="list-group-item list-group-item-success">
//             {hero}
//           </li>))}
//       </ul>
//     )
//   }
// }

// 2
// class Hero extends React.Component {
//   render() {
//     return (
//       <li className="list-group-item list-group-item-success">
//         {this.props.name}
//       </li>
//     )
//   }
// }
// class App extends React.Component {
//   render() {
//     const heroes = [
//       'Iron Man',
//       'Thor',
//       'Captain America',
//       'The Incredible Hulk',
//       'Black Widow',
//       'Deadpool'
//     ];
//     return (
//       <ul className="list-group">
//         {heroes.map(hero => (
//           <Hero name={hero}/>
//         ))}
//       </ul>
//     )
//   }
// }

// 3
;

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
      var factor = this.props.factor;
      return React.createElement(
        'span',
        { className: 'badge' },
        this.props.val
      );
    }
  }]);

  return Badge;
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
      var badgeVal = this.props.hero.badge + ' @' + this.props.hero.factor * this.props.counter;

      return React.createElement(
        'li',
        { className: 'list-group-item list-group-item-success' },
        this.props.hero.name,
        React.createElement(Badge, { val: badgeVal })
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
      counter: 0
    };
    window.setInterval((function () {
      this.setState({ counter: this.state.counter + 1 });
    }).bind(_this3), 1000);
    return _this3;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      var _this4 = this;

      var heroes = [{ name: 'Iron Man', badge: 'IM', factor: 1 }, { name: 'Thor', badge: 'TH', factor: 2 }, { name: 'Captain America', badge: 'CA', factor: 3 }, { name: 'The Incredible Hulk', badge: 'HU', factor: 4 }, { name: 'Black Widow', badge: 'BW', factor: 5 }, { name: 'Deadpool', badge: 'DP', factor: 6 }];
      return React.createElement(
        'ul',
        { className: 'list-group' },
        heroes.map(function (hero) {
          return React.createElement(Hero, { hero: hero, counter: _this4.state.counter });
        })
      );
    }
  }]);

  return App;
})(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('xi-react'));