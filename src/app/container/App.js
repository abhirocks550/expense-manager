import React from 'react';
import { connect } from 'react-redux';
import NavBar from '../components/NavBar';
import Features from '../components/Features';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <NavBar />
        <Features />
        {this.props.children}
      </div>
    );
  }
}

export default App;
