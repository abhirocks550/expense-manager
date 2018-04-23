import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Loader from 'react-loaders';
import './HomePage.scss';

class HomePage extends React.Component {
  render() {
    let reducer =  this.props.HomeReducer;
    return (
          <div className='container'>
            <h2>This is Home page. List of Users is below</h2>
              <div id="loader">
                {
                  reducer.isUserspending &&
                    <div>
                      <p>Loading list of users...</p> <hr/>
                      <Loader type="ball-spin-fade-loader" />
                    </div>
                }
              </div>
              <ul>
                  {
                    reducer.users.map((user, index) => {
                      return <li> {user} </li>;
                    })
                 }
                </ul>
          </div>
    );
  }
}

const mapStateToProps = (state, ownState) => {
  return {
    HomeReducer: state.HomeReducer,
  };
};

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
