import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Auth.css';
import { createUser } from '../../actions';
import backgroundimage from '../../static/trophy.png';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      confirmPassword: '',
      email: '',
      error: undefined,
    };
  }
  componentWillReceiveProps(props) {
    this.setState({
      error: props.error,
    });
  }
  // Rather than having individual input functions.
  handleInput = async (e, type) => {
    e.preventDefault();
    await this.setState({
      [type]: e.target.value,
    });
  };
  signup = (e) => {
    e.preventDefault();
    this.props.createUser(this.state, this.props.history);
    this.setState({
      password: '',
      confirmPassword: '',
      error: this.props.error,
    });
  };
  renderAlert() {
    if (!this.state.error) return null;
    return <p style={{ color: '#337ab7' }}>{this.state.error}</p>;
  }
  render() {
    return (
      <div>
        <div className="Auth__Body">
          <div className="Auth__Body__Imageholder" />
          <div className="Auth__Body__Container" style={{ marginTop: '80px' }}>
            <h1 style={{ marginBottom: '20px' }}>Sign up</h1>
            {this.renderAlert()}
            <form onSubmit={this.signup}>
              <label htmlFor="SignUpForm__Username">Username</label>
              <input
                id="SignUpForm__Username"
                onChange={e => this.handleInput(e, 'username')}
                value={this.state.username}
                type="text"
              />
              <label htmlFor="SignUpForm__Password">Password</label>
              <input
                id="SignUpForm__Password"
                onChange={e => this.handleInput(e, 'password')}
                value={this.state.password}
                type="password"
              />
              <label htmlFor="SignUpForm__ConfirmPassword">Confirm Password</label>
              <input
                id="SignUpForm__ConfirmPassword"
                onChange={e => this.handleInput(e, 'confirmPassword')}
                value={this.state.confirmPassword}
                type="password"
              />
              <label htmlFor="SignUpForm__Email">Email</label>
              <input
                id="SignUpForm__Email"
                onChange={e => this.handleInput(e, 'email')}
                value={this.state.email}
                type="text"
              />
              <button
                style={{
                  marginTop: 20,
                }}
                type="submit"
              >
                Sign Up
              </button>
            </form>
            <p>
              Already have an account?
              <Link to={"/signin"} className="Link">
                {' '}SignIn now
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
  };
};

export default connect(mapStateToProps, { createUser })(Signup);
