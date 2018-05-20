import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ListTeachersView.css';
import ListTeachers from './components/ListTeachers/ListTeachers';
import Gateway from '../Gateway/Gateway';

class ListTeachersView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    const gatewayProps = {
      allow: [
        'schoolAdmin',
      ],
      redirect: {
        teacher: '/scoreboard',
      },
    };

    return (
      <Gateway {...gatewayProps}>
        <div className="ListTeachersView">
          <ListTeachers />
          <Link to="/teachers/create">
            <button>Add new teacher</button>
          </Link>
        </div>
      </Gateway>
    );
  }

}

export default ListTeachersView;
