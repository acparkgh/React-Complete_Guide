import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
 

class App extends Component {
  // constructor() {
  //   super()
  //     this.state = { persons: []}
  state = {
    persons: [
      { id: 'dfkdsfkl', name: 'Max', age: 28 },
      { id: 'fdkldfj4', name: 'Manu', age: 29 },
      { id: 'dodfkeid', name: 'Stephanie', age: 26 },
    ],
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    // debugger
    // const persons = this.state.persons.slice();
    const newPersons = [...this.state.persons];
    newPersons.splice(personIndex, 1);
    this.setState({persons: newPersons});
  }

  togglePersonHandler = () => {
    // debugger
    // const showPerson = this.state.showPersons
    // this.setState({
    //   showPersons: !showPerson
    // })
    this.setState( prevState => { 
      return {
        showPersons: !prevState.showPersons
      }
    } )
  }

  nameChangeHandler = (event, personId) => {
    // console.log(event.target.value)
    // debugger
    const personIndex = this.state.persons.findIndex(eachPerson => {
      return (
        eachPerson.id === personId
      )
    })

    const person = {
      ...this.state.persons[personIndex]
    }
    
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
        persons: persons
    });
  }

  render() {

    const buttonStyle = {
      backgroundColor: 'yellow',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => { 
            return (
              <Person name={person.name} 
                      age={person.age}
                      // deletePersonHandler={() => this.deletePersonHandler(index)} 
                      deletePersonHandler={this.deletePersonHandler.bind(this, index)}
                      nameChangeHandler={(event) => this.nameChangeHandler(event, person.id)}
                      key={person.id} 
              />
            )
          })}
        </div> 
      )
    }

    // console.log(this.state)
    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.togglePersonHandler} 
                style={buttonStyle}
        >
          Show Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
