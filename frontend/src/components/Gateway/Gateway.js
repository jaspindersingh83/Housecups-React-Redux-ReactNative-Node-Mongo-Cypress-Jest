import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserRoles } from '../../actions';

class Gateway extends Component {

  constructor(props) {
    super(props);
    this.state = {
      timedOut: false,
      allow: props.allow || [],
      redirect: props.redirect,
      execute: props.execute,
      renderComponent: false,
    };
  }

  async componentWillMount() {
    await this.props.getUserRoles(this.props.history);
    await this.validateUser();
  }

  componentWillReceiveProps(props) {
    const {
      isSuperAdmin,
      isSchoolAdmin,
      isTeacher,
      schoolID,
    } = props.auth;

    if (Object.values(props.auth).length > 0) {
      let token = '';
      token += (isSuperAdmin) ? '1' : '0';
      token += (isSchoolAdmin) ? '1' : '0';
      token += (isTeacher) ? '1' : '0';
      token += (!schoolID) ? '' : schoolID;

      sessionStorage.setItem('token', token);
    }
  }

  validateUser = () => {

    const {
      history,
      location,
    } = this.props;

    const sessionToken = sessionStorage.getItem('token');

    if (sessionToken !== null && !this.state.timedOut) {

      const roles = [];

      const isSuperAdmin = (sessionToken[0] === '1');
      const isSchoolAdmin = (sessionToken[1] === '1');
      const isTeacher = (sessionToken[2] === '1');
      const isNone = (!isSuperAdmin && !isSchoolAdmin && !isTeacher);
      const schoolID = sessionToken.slice(3);

      if (isSuperAdmin) {
        roles.push('superAdmin');
      }
      if (isSchoolAdmin) {
        roles.push('schoolAdmin');
      }
      if (isTeacher) {
        roles.push('teacher');
      }
      if (isNone) {
        roles.push('none');
      }


      let userAllowed = false;

      for (let i = 0; i < this.state.allow.length; i++) {
        if (roles.includes(this.state.allow[i])) {
          userAllowed = true;
          break;
        }
      }

      // Handle Function Execution (props.execute)
      if (this.state.execute) {
        const props = {
          // user roles
          roles,
          // roles breakdown
          isSuperAdmin,
          isSchoolAdmin,
          isTeacher,
          isNone,
          // school id
          schoolID,
          // props
          location,
          history,
        };

        this.state.execute(props);

      } else {

        if (!userAllowed) {
          // Handle Redirection (props.redirect)
          if (this.state.redirect) {
            if (typeof this.state.redirect === 'string') {
              history.push(this.state.redirect);
            } else if (typeof this.state.redirect === 'object') {
              const primaryUserRole = roles[0];
              const primaryUserRedirectUrl = this.state.redirect[primaryUserRole];
              history.push(primaryUserRedirectUrl);
            }
          } else {
            // Error
            history.push('/signin');
          }

        }

      }

      if (userAllowed) {
        this.setState({
          renderComponent: true,
        });
      }

    } else {
      setTimeout(this.validateUser, 500);
      setTimeout(() => {
        this.setState({
          timedOut: true,
        });
      }, 5000);
    }

  }

  render() {

    return (
      <div className="Gateway">
        {
          this.state.renderComponent
            ? this.props.children
            : 'Loading...'
        }
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return state;
};

export default withRouter(connect(mapStateToProps, { getUserRoles })(Gateway));
