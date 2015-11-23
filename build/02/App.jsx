'use strict';
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
class Badge extends React.Component {
  render() {
    const val = parseInt(Math.random() * 15);
    return (<span className="badge">{val}</span>)
  }
}

class App extends React.Component {
  render() {
    const heroes = [
      'Iron Man',
      'Thor',
      'Captain America',
      'The Incredible Hulk',
      'Black Widow',
      'Deadpool'
    ];
    return (
      <ul className="list-group">
        {heroes.map(hero => (
          <li className="list-group-item list-group-item-success">
            {hero}
            <Badge/>
          </li>))}
      </ul>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('xi-react')
);
