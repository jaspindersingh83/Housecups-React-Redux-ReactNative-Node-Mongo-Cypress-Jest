import React, { Component } from 'react';
import './SchoolSearch.css';
import Section from '../Section/Section';

class SchoolSearch extends Component {

  state = {
    nameInput: '',
    locationInput: '',
    matchedSchools: [],
    schools: [
      {
        name: 'Lambda School',
        location: 'Online',
      },
      {
        name: 'University of California',
        location: 'Berkley',
      },
      {
        name: 'University of Illinois',
        location: 'Chicago',
      },
      {
        name: 'University of Delaware',
        location: 'Newark',
      },
      {
        name: 'Massachusetts Institute of Technology',
        location: 'Cambridge',
      }
    ],
  }

  handleInput = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    const newState = {
      matchedSchools: this.searchSchools(
        (name === 'name') ? value : this.state.nameInput,
        (name === 'location') ? value : this.state.locationInput,
      ),
    };
    newState[`${name}Input`] = value;
    this.setState(newState);
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  searchSchools = (name, location) => {
    // DELETE THIS TEST FUNCTION
    return this.state.schools.filter(school => {
      const matchedName = new RegExp(name, 'gi').test(school.name);
      const matchedLocation = new RegExp(location, 'gi').test(school.location);
      console.log('name', matchedName, 'location', matchedLocation);
      return matchedName && matchedLocation;
    });
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

export default SchoolSearch;
