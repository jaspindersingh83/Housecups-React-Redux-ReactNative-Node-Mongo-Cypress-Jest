import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ListHousesView.css';
import ListHouses from './components/ListHouses/ListHouses';
import Gateway from '../Gateway/Gateway';

class ListHousesView extends Component {
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
