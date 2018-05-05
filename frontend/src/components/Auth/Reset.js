import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import backgroundimage from '../../static/trophy.png';
import { resetPassword } from '../../actions';

class Resetpassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      confirmPassword: '',
      error: null,
    };
  }
  componentDidMount() {
    const token = this.props.location.search.substr(1);
    localStorage.setItem('token', token);
  }
  componentWillReceiveProps(props) {
    this.setState({
      error: props.error,
    });
  }
  handleInput = (e, type) => {
    e.preventDefault();
    this.setState({
      [type]: e.target.value,
    });
  };
  resetPassword = (e) => {
    e.preventDefault();
    this.props.resetPassword(this.state, this.props.history);
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
          <div
            className="Auth__Body__Container"
            style={{ marginTop: '40px' }}
          >
            <h1 style={{ marginBottom: '20px' }}>Reset Password</h1>
            {this.renderAlert()}
            <form onSubmit={this.resetPassword}>
              <label>New Password</label>
              <input
                onChange={e => this.handleInput(e, 'password')}
                value={this.state.password}
                type="password"
              />
              <label>Confirm Password</label>
              <input
                onChange={e => this.handleInput(e, 'confirmPassword')}
                value={this.state.confirmPassword}
                type="password"
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
              New to Litchi?
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
  };
};

export default connect(mapStateToProps, { resetPassword })(Resetpassword);
