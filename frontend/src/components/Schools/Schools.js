import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserRoles } from '../../actions';
import CreateSchool from './components/CreateSchool';

class Schools extends Component {

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
    this.setState({
      auth: { ...props.auth },
    });
  }

  render() {
    return (
      <div>
        <CreateSchool auth={this.state.auth} />
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return state;
};

export default withRouter(connect(mapStateToProps, { getUserRoles })(Schools));
