import React, { Component } from 'react';
import './Features.css';

class Features extends Component {

  constructor(props) {
    super(props);
    this.state = {
      features: props.features,
    };
  }

  render() {
    return (
      <div className="Features">
        {
          this.state.features.map((feature) => {
            return (
              <div className="Feature" key={ feature.id }>
                <div className="Feature__image" data-feature-name={ feature.id }></div>
                <div className="Feature__title">{ feature.title }</div>
              </div>
            )
          })
        }
      </div>
    );
  }

}

export default Features;
