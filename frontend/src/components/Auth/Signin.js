import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Auth.css';
import { signin } from '../../actions';
import backgroundimage from '../../static/trophy.png';

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      error: undefined,
      renderedAfterSignUp: false,
    };
  }
  componentWillReceiveProps(props) {
    if (props.signedUpusername && !this.state.renderedAfterSignUp) {
      this.setState({
        username: props.signedUpusername,
        email: props.signedUpusername,
        password: '',
        error: undefined,
        renderedAfterSignUp: true,
      });
    } else {
      this.setState({
        password: '',
        error: props.error,
      });
    }
  }
  signin = (e) => {
    e.preventDefault();
    this.props.signin(this.state, this.props.history);
  };

  handleUsernameInput = (e) => {
    e.preventDefault();
    this.setState({
      username: e.target.value,
      email: e.target.value,
    });
  };
  handlePasswordInput = (e) => {
    e.preventDefault();
    this.setState({
      password: e.target.value,
    });
  };
  renderAlert = () => {
    if (!this.state.error) return null;
    return <p style={{ color: '#337ab7' }}>{this.state.error}</p>;
  };
  renderSignupSuccess = () => {
    if (!this.props.signedUpusername) return null;
    return (
      <p style={{ color: '#337ab7' }}>Sign Up successfull, Please sign in</p>
    );
  };
  renderResetPasswordSuccess = () => {
    if (!this.props.resetPassword) return null;
    return (
      <p style={{ color: '#337ab7' }}>
        Password has been reset, Please sign in with new password
      </p>
    );
  };
  renderteacherSignupSuccess() {
    if (!this.props.teacherSignup) return null;
    return (
      <p style={{ color: '#337ab7' }}>
        You have been signed up as a Teacher, Please Sign in
      </p>
    );
  }

  render() {
    return (
      <div>
        <div className="Auth__Body">
          <div className="Auth__Body__Imageholder" />
          <div className="Auth__Body__Container" style={{ marginTop: '80px' }}>
            <h1 style={{ marginBottom: '20px' }}>Sign In</h1>
            {this.renderAlert()}
            {this.renderSignupSuccess()}
            {this.renderResetPasswordSuccess()}
            {this.renderteacherSignupSuccess()}
            <form onSubmit={this.signin}>
              <label htmlFor="SignInForm__Username">Username or Email</label>
              <input
                id="SignInForm__Username"
                onChange={this.handleUsernameInput}
                value={this.state.username}
                type="text"
              />
              <label htmlFor="SignInForm__Password">Password</label>
              <input
                id="SignInForm__Password"
                onChange={this.handlePasswordInput}
                value={this.state.password}
                type="password"
              />
              <p style={{ marginTop: '50px', marginBottom: '0px' }}>
                <Link to={'/forgotpassword'} className='Link'>
                  Forgot username or password?
                </Link>
              </p>
              <button
                style={{
                  marginTop: 20,
                }}
                type="submit"
              >
                Sign In
              </button>
            </form>
            <p>
              New to Housecups?
              <Link to={'/signup'} className='Link'>
                {' '}Sign Up now
              </Link>
            </p>
          </div>
          <div className="Auth__Body__Imageholder">
            <img
              src={backgroundimage}
              alt="Album"
              style={{ opacity: 0.1 }}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.auth.error,
    signedUpusername: state.auth.signedUpusername,
    resetPassword: state.auth.resetPassword,
    teacherSignup: state.auth.teacherSignup,
  };
};

export default connect(mapStateToProps, { signin })(Signin);
