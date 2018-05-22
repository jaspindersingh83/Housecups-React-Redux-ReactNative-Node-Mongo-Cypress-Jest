import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ListTeachersView.css';
import ListTeachers from './components/ListTeachers/ListTeachers';
import Gateway from '../Gateway/Gateway';

class ListTeachersView extends Component {

  render() {
    const gatewayProps = {
      allow: [
        'schoolAdmin',
      ],
      redirect: {
        teacher: '/scoreboard',
        superAdmin: '/schools/list',
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
