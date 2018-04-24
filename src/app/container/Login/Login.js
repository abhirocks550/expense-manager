import React from 'react';
import BootStrapModal from '../../components/Modal/BootStrapModal';

class Login extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleClose = this.handleClose.bind(this);
    this.login = this.login.bind(this);

    this.state = {
      show: true,
    };
  }

  login(event) {
    event.preventDefault();
    this.setState({
        show: false,
      });
  }

  handleClose() {
    this.setState({
      show: false,
    });
  }

  render() {
    let loginForm = (
        <form onSubmit={this.login}>
          <div className="form-group">
                <label>Email address:</label>
                <input type="email" className="form-control" id="email" />
            </div>
            <div className="form-group">
                <label>Password:</label>
                <input type="password" className="form-control" id="pwd" />
            </div>
            <button type="submit" className="btn btn-default">Submit</button>
        </form>
    );

    return (
        <div>
            <BootStrapModal
            handleClose={this.handleClose} heading = "Login Form"
            body = {loginForm}
            show={this.state.show} />             
        </div>
    );
  }
}

export default Login;
