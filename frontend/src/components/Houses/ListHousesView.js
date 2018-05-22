import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ListHousesView.css';
import ListHouses from './components/ListHouses/ListHouses';
import Gateway from '../Gateway/Gateway';

class ListHousesView extends Component {

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
        <div className="ListHousesView">
          <ListHouses />
          <Link to="/houses/create">
            <button>Create new house</button>
          </Link>
        </div>
      </Gateway>
    );
  }

}

export default ListHousesView;
