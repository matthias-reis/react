(function () {
  let heroes = [
    'Iron Man',
    'Thor',
    'Captain America',
    'The Incredible Hulk',
    'Black Widow',
    'Hawkeye',
    'Deadpool'
  ];

  const callbacks = {};

  function on(ev, cb) {
    if(!callbacks[ev]) {
      callbacks[ev] = [];
    }
    callbacks[ev].push(cb);
  }

  function trigger(ev, payload) {
    if (callbacks[ev]) {
      callbacks[ev].forEach(function(cb){
        cb(payload);
      });
    }
  }

  function getNextHero() {
    return heroes.length ? heroes.shift() : 'No more superheroes';
  }

  class HeroInput extends React.Component {
    constructor() {
      super();
      this.state = {value: ''};
    }

    handleKey(ev) {
      if (ev.charCode === 13) {
        trigger('ADD_HERO', ev.target.value);
        ev.target.value = '';
      }
    }

    render() {
      return (
        <input type="text" onKeyPress={this.handleKey.bind(this)}/>
      );
    }
  }

  class Hero extends React.Component {
    render() {
      return (
        <li className="list-group-item list-group-item-success">
          {this.props.hero}
        </li>
      )
    }
  }

  class App extends React.Component {
    constructor() {
      super();
      this.state = {
        heros: [getNextHero(),getNextHero(),getNextHero()]
      }
      on('ADD_HERO', this.addHero.bind(this));
    }

    addHero(hero) {
      this.setState({
        heros: [...this.state.heros, hero]
      });
    }

    render() {
      return (
        <ul className="list-group">
          {this.state.heros.map(hero => (
            <Hero hero={hero}/>
          ))}
          <li className="list-group-item list-group-item-default">
            Add hero: <HeroInput/>
          </li>
        </ul>
      )
    }
  }


  ReactDOM.render(
    <App/>,
    document.getElementById('xi-react')
  );
})();
