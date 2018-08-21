import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <h2>App component</h2>
        {this.props.children}
      </div>
    );
  }
}

export default App;
