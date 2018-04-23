import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class HomePage extends React.Component {
  render() {
    let reducer = this.props.users;
    debugger;
    return (
          <div>
            <h2>This is Home page</h2>
          </div>
    );
  }
}

const mapStateToProps = (state, ownState) => {
  return {
    users: state.HomeReducer,
  };
};

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
