import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Auth.css';
import { forgotPassword } from '../../actions';
import backgroundimage from './trophy.png';

class Fogotpassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      error: null,
      emailSent: null,
    };
  }
  componentWillReceiveProps(props) {
    this.setState({
      error: props.error,
      emailSent: props.emailSent,
    });
  }
  handleInput = (e) => {
    e.preventDefault();
    this.setState({
      email: e.target.value,
    });
  };
  forgotPassword = (e) => {
    e.preventDefault();
    this.props.forgotPassword(this.state.email);
    this.setState({
      email: '',
      error: this.props.error,
    });
  };
  renderAlert() {
    if (!this.state.error) return null;
    return <p style={{ color: '#337ab7' }}>{this.state.error}</p>;
  }
  renderEmailSuccess() {
    if (!this.state.emailSent) return null;
    return (
      <p style={{ color: '#337ab7' }}>
        Reset Password link has been sent to email associated with this account
      </p>
    );
  }

  render() {
    return (
      <div>
        <div className="Auth__Body">
          <div className="Auth__Body__Imageholder" />
          <div
            className="Auth__Body__Container"
            style={{ marginTop: '20px' }}
          >
            <h1 style={{ marginBottom: '20px' }}>Forgot Password</h1>
            {this.renderAlert()}
            {this.renderEmailSuccess()}
            <form onSubmit={this.forgotPassword}>
              <label>Email</label>
              <input
                onChange={this.handleInput}
                value={this.state.email}
                type="text"
              />
              <Button
                style={{ width: '100%', margin: '20px 0px' }}
                bsStyle="primary"
                type="submit"
              >
                Submit
              </Button>
            </form>
            <p>
              New to Housecups?
              <Link to={"/signup"} className="Link">
                {' '}
                Sign Up now
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
    emailSent: state.auth.emailSent,
  };
};

export default connect(mapStateToProps, { forgotPassword })(Fogotpassword);
