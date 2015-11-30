'use strict';

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
class Badge extends React.Component {
  render() {
    let factor = this.props.factor
    return (<span className="badge">{this.props.val}</span>)
  }
}

class Hero extends React.Component {
  render() {
    const badgeVal = this.props.hero.badge + ' @'
      + (this.props.hero.factor * this.props.counter);
      
    return (
      <li className="list-group-item list-group-item-success">
        {this.props.hero.name}
        <Badge val={badgeVal}/>
      </li>
    )
  }
}
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    };
    window.setInterval(function() {
      this.setState({counter: this.state.counter + 1});
    }.bind(this), 1000);
  }
  render() {
    const heroes = [
      {name:'Iron Man', badge:'IM', factor: 1},
      {name:'Thor', badge:'TH', factor: 2},
      {name:'Captain America', badge:'CA', factor: 3},
      {name:'The Incredible Hulk', badge:'HU', factor: 4},
      {name:'Black Widow', badge:'BW', factor: 5},
      {name:'Deadpool', badge:'DP', factor: 6}
    ];
    return (
      <ul className="list-group">
        {heroes.map(hero => (
          <Hero hero={hero} counter={this.state.counter}/>
        ))}
      </ul>
    )
  }
}


ReactDOM.render(
  <App/>,
  document.getElementById('xi-react')
);
