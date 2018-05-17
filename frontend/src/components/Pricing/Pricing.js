import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Pricing.css';
import PricingPackage from './components/PricingPackage/PricingPackage';

class Pricing extends Component {

  constructor(props) {
    super(props);
    this.state = {
      packages: [
        {
          name: 'K-12',
          amount: 29,
          teachersAllowed: 5,
          housesAllowed: 10,
        },
        {
          name: 'College',
          amount: 59,
          teachersAllowed: 10,
          housesAllowed: 20,
        },
        {
          name: 'University',
          amount: 89,
          teachersAllowed: '10 +',
          housesAllowed: '20 +',
        },
      ],
    };
  }

  render() {
    const { packages } = this.state;
    return (
      <div className="Pricing">
        <div className="wrapper">
          <h2>Affordable Pricing</h2>
          <div className="PricingPackages__listings">
            {
              packages.map((packageInfo, index) => {
                return <PricingPackage key={packageInfo.name} package={packageInfo} />;
              })
            }
          </div>
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Pricing);
