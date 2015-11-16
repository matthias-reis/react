class App extends React.Component {
  render() {
    return (
      <div className="btn-group btn-group-lg">
        <Info label="One" counter={42} />
        <Warning label="Two" />
        <Danger label="Danger" />
      </div>
    )
  }
}

class Info extends React.Component {
  render() {
    return (
      <button className="btn btn-info">
        {this.props.label} <Badge counter={this.props.counter} />
      </button>
    )
  }
}

class Warning extends React.Component {
  render() {
    return (
      <button className="btn btn-warning">
        {this.props.label}
      </button>
    )
  }
}


class Danger extends React.Component {
  render() {
    return (
      <button className="btn btn-danger">
        {this.props.label}
      </button>
    )
  }
}

class Badge extends React.Component {
  render() {
    return (
      <span className="badge">
        {this.props.counter}
      </span>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('xi-react')
);
