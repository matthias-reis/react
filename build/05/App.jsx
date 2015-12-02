'use strict';

class Row extends React.Component {
  render() {
    return (<div className="row">{this.props.children}</div>);
  }
}

class Col extends React.Component {
  render() {
    const cls = "col-xs-" + this.props.w;
    return (<div className={cls}>{this.props.children}</div>);
  }
}

class Panel extends React.Component {
  render() {
    const heading = this.props.heading ? (
      <div className="panel-heading">{this.props.heading}</div>
    ) : null;

    return (
      <div className="panel panel-default">
        {heading}
        <div className="panel-body">
          {this.props.children}
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <Row>
        <Col w="4">
          <Panel heading="Left Side">Four Column Panel</Panel>
        </Col>
        <Col w="8">
          <Panel heading="Right Side">Eight Column Panel</Panel>
        </Col>
      </Row>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('xi-react')
);
