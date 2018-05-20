import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getHousesBySchool } from '../../../../actions';
import './ListHouses.css';
import House from '../House/House';
import DashboardNotification from '../../../DashboardNotification/DashboardNotification';

class ListHouses extends Component {

  constructor(props) {
    super(props);
    this.state = {
      houses: [],
      receivedHoused: false,
    };
  }

  async componentWillMount() {
    await this.props.getHousesBySchool(this.props.history);
  }

  componentWillReceiveProps(props) {
    this.setState({
      houses: [...props.houses],
      receivedHoused: true,
    });
  }

  renderNoHouseWarning = () => {
    if (this.state.receivedHoused) {
      return (
        <DashboardNotification type="warn">
          You haven't created any houses yet.
        </DashboardNotification>
      );
    }
    return null;
  }

  render() {
    return (
      <div className="ListHouses Table">
        <h3 className="table__title">Created Houses</h3>
        {
          (this.state.houses.length === 0)
            ? this.renderNoHouseWarning()
            : (
              <div className="Table__row Table__row--head" >
                <div className="Table__column">House Name</div>
                <div className="Table__column Table__column--color-swatch">Color</div>
                <div className="Table__column">Mascot</div>
                <div className="Table__column Table__column--action" />
                <div className="Table__column Table__column--action" />
              </div>
            )
        }
        {
          this.state.houses.map((house) => {
            return (
              <House
                key={house._id}
                house={house}
              />
            );
          })
        }
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return state;
};

export default withRouter(connect(mapStateToProps, { getHousesBySchool })(ListHouses));
