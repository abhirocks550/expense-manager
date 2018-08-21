import React from 'react';
import { connect } from 'react-redux';
import NavBar from '../components/NavBar';
import Features from '../components/Features/Features';
import About from '../components/About/About';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <NavBar />
        <Features />
        <About />
        {this.props.children}
      </div>
    );
  }
}

export default App;
