import React, { Component } from 'react';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

import { connect } from 'react-redux';
import * as actionTypes from '../store/actions';

class Persons extends Component {
  render() {
    return (
      <div>
        <AddPerson personAdded={this.props.onAddPerson} />
        {this.props.prs.map((person) => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => this.props.onRemovePerson(person.id)}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    prs: state.persons,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddPerson: () => dispatch({ type: actionTypes.ADD_PERSON }),
    onRemovePerson: (pId) =>
      dispatch({ type: actionTypes.REMOVE_PERSON, personId: pId }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
