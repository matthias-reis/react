class Badge extends React.Component {
  render() {
    return (<span className="badge">{this.props.val}</span>)
  }
  componentWillMount() {
    console.log('Badge will mount');
  }
  componentDidMount() {
    console.log('Badge did mount');
  }
  componentWillReceiveProps(p) {
    console.log('Badge gets props', 'PROP:' + (p && p.val));
  }
  componentWillUpdate(p, s) {
    console.log('Badge updates', 'PROP:' + (p && p.val), 'STATE:' + (s && s.val));
  }
  componentDidUpdate(p, s) {
    console.log('Badge has updated', 'PROP:' + (p && p.val), 'STATE:' + (s && s.val));
  }
  componentWillUnmount(p, s) {
    console.log('Badge leaves');
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {val: 'getting cape ...'}
  }

  componentDidMount() {
    console.log('App did mount');

    window.setTimeout(function(){
      console.log('=== 1 ===');
      this.setState({val: 'wearing cape ...' });
    }.bind(this), 2500);

    window.setTimeout(function(){
      console.log('=== 2 ===');
      this.setState({val: 'flying ...' })
    }.bind(this), 5000);

    window.setTimeout(function(){
      console.log('=== 3 ===');
      this.setState({val: 'landing ...' })
    }.bind(this), 7500);

    window.setTimeout(function(){
      console.log('=== 4 ===');
      this.setState({val: '' })
    }.bind(this), 10000);
  }

  componentWillMount() {
    console.log('App will mount');
  }
  componentWillReceiveProps(p) {
    console.log('App gets props', 'PROP:' + (p && p.val));
  }
  componentWillUpdate(p, s) {
    console.log('App updates', 'PROP:' + (p && p.val), 'STATE:' + (s && s.val));
  }
  componentDidUpdate(p, s) {
    console.log('App has updated', 'PROP:' + (p && p.val), 'STATE:' + (s && s.val));
  }
  componentWillUnmount(p, s) {
    console.log('App leaves');
  }

  render() {
    const heroes = [
      'Iron Man',
      'Thor',
      'Captain America',
      'The Incredible Hulk',
      'Black Widow'
    ];
    let badge;
    if (this.state.val == '') {
        badge = null;
    } else {
        badge = <Badge val={this.state.val}/>
    }
    return (
      <ul className="list-group">
        <li className="list-group-item list-group-item-success" ref="badgeContainer">
          Doctor Xing
          {badge}
        </li>
        {heroes.map(hero => (
          <li className="list-group-item list-group-item-default" key={hero}>
            {hero}
          </li>))}
      </ul>
    )
  }
}


ReactDOM.render(
  <App/>,
  document.getElementById('xi-react')
);
