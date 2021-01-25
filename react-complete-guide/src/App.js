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
    console.log(personIndex)
    // const persons = this.state.persons.slice();
    const newPersonsArray = [...this.state.persons];
    newPersonsArray.splice(personIndex, 1);
    this.setState({persons: newPersonsArray});
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
    const updatedPerson = {
      ...this.state.persons[personIndex]
    }
    updatedPerson.name = event.target.value;
    
    const newPersonsArray = [...this.state.persons];
    // newPersonsArray[personIndex].name = event.target.value;
    newPersonsArray[personIndex] = updatedPerson;
    
    this.setState({
      persons: newPersonsArray
    });
  }

  render() {

    const buttonStyle = {
      backgroundColor: 'green',
      color: 'white',
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
      );
      buttonStyle.backgroundColor = 'red';
    }
    
    const classes = [];

    if(this.state.persons.length <=2) {
      classes.push('red');
    }

    if(this.state.persons.length <=1){
      classes.push('bold');  
    }
    
    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p className={classes.join(' ')} >This is really working!</p>
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
