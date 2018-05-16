import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserRoles } from '../../actions';
import './AccountOverview.css';
import SchoolInfoOverview from './components/SchoolInfoOverview/SchoolInfoOverview';

class AccountOverview extends Component {

  constructor(props) {
    super(props);
    this.state = {
      auth: {},
    };
  }

  async componentWillMount() {
    await this.props.getUserRoles(this.props.history);
  }

  componentWillReceiveProps(props) {
    const { isSuperAdmin, isSchoolAdmin, isTeacher } = props.auth;
    if (!isSchoolAdmin && !isSchoolAdmin && !isTeacher) {
      this.props.history.push('/schools');
    }
    this.setState({
      auth: { ...props.auth },
    });
  }

  render() {
    return (
      <div className="Overview">
        <div className="User">
          <div className="User__name">John Doe</div>
          <div className="User__role">Admin</div>
        </div>
        {
          (this.state.auth.isAdmin) ? <SchoolInfoOverview /> : null
        }
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = {
  getUserRoles,
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountOverview);
