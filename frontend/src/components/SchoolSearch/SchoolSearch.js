import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchSchools } from '../../actions';
import './SchoolSearch.css';
import Section from '../Section/Section';

class SchoolSearch extends Component {

  state = {
    nameInput: '',
    locationInput: '',
    matchedSchools: [],
  }

  async componentWillReceiveProps(props) {
    await this.setState({
      matchedSchools: [...props.schools],
    });
  }

  handleInput = async (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    const newState = {};
    newState[`${name}Input`] = value;
    this.setState(newState);

    await this.props.searchSchools({
      name: this.state.nameInput,
      location: this.state.locationInput,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <Section className="SchoolSearch">
        <h1>Search Schools</h1>
        <form onSubmit={this.handleSubmit} className="SchoolSearch__form">
          <input
            type="text"
            name="name"
            placeholder="Enter School Name"
            value={this.state.nameInput}
            onChange={this.handleInput}
          />
          <input
            type="text"
            name="location"
            placeholder="Enter City, State"
            value={this.state.locationInput}
            onChange={this.handleInput}
          />
          <button onClick={this.handleSubmit}>Search</button>
        </form>
        <div className="SchoolSearch__results">
          <div className="SchoolSearch__results__message">
            {
              ((this.state.nameInput === '' && this.state.locationInput === '') || this.state.matchedSchools.length === 0)
                ? (
                  <div className="text">No school matched.</div>
                )
                : (
                  <div className="text">
                    <span className="highlight highlight--green">{this.state.matchedSchools.length}</span>&nbsp;
                    Schools matched your search.
                  </div>
                )
            }
          </div>
          <ul className="SearchResults">
            {
              ((this.state.nameInput !== '' || this.state.locationInput !== '') && this.state.matchedSchools.length > 0)
                ? this.state.matchedSchools.map((school, index) => {
                  return (
                    <a href={`/scoreboard/${school.name}`} key={index}>
                      <li className="SearchResults__item">
                        <div className="SearchResults__item__name">
                          {school.name}
                        </div>
                      </li>
                    </a>
                  );
                })
                : null
            }
          </ul>
        </div>
      </Section>
    );
  }

}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { searchSchools })(SchoolSearch);
