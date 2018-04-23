import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class HomePage extends React.Component {
  render() {
    return (
          <h2>This is Home page</h2>
    );
  }
}

const mapStateToProps = (state, ownState) => {
  return {
  };
};

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
