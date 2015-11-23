'use strict';

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
    return (
      <p>Time spent on this page: <strong>{this.state.counter} s</strong></p>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('xi-react')
);
