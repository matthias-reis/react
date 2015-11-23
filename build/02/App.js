'use strict'
// 1
// React.render(
//   <h3 className="text-info">Direct</h3>,
//   document.getElementById('xi-react')
// );

// 2
// class App extends React.Component {
//   render() {
//     return (<h3 className="text-info">Classy</h3>)
//   }
// }

// 3
// class App extends React.Component {
//   render() {
//     return (
//       <ul className="list-group">
//         <li className="list-group-item">Iron Man</li>
//         <li className="list-group-item">Thor</li>
//         <li className="list-group-item">Captain America</li>
//         <li className="list-group-item">The Incredible Hulk</li>
//         <li className="list-group-item">Black Widow</li>
//       </ul>
//     )
//   }
// }

// 4
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
//         {heroes.map(hero => (<li className="list-group-item list-group-item-success">{hero}</li>))}
//       </ul>
//     )
//   }
// }

// 5
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
      var val = parseInt(Math.random() * 15);
      return React.createElement(
        'span',
        { className: 'badge' },
        val
      );
    }
  }]);

  return Badge;
})(React.Component);

var App = (function (_React$Component2) {
  _inherits(App, _React$Component2);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(App).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      var heroes = ['Iron Man', 'Thor', 'Captain America', 'The Incredible Hulk', 'Black Widow', 'Deadpool'];
      return React.createElement(
        'ul',
        { className: 'list-group' },
        heroes.map(function (hero) {
          return React.createElement(
            'li',
            { className: 'list-group-item list-group-item-success' },
            hero,
            React.createElement(Badge, null)
          );
        })
      );
    }
  }]);

  return App;
})(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('xi-react'));