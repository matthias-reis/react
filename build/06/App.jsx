'use strict';


class App extends React.Component {
  render() {
    return (
      <div className="panel panel-success">
        <div className="panel-heading">Success</div>
        <div className="panel-body">All property types succeeded</div>
      </div>
    )
  }
}

App.propTypes = {
  value: React.PropTypes.number
};


ReactDOM.render(
  // <App value="42"/>, //warning
  <App value={42}/>,
  document.getElementById('xi-react')
);
