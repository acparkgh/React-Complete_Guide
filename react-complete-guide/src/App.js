import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  // constructor() {
  //   super()
  //     this.state = { persons: []}
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 },
    ],
  }
  
  switchNameHandler = (newName) => {
    // console.log('was clicked!')
    // debugger
  
    // console.log(this.state.persons)
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 },
      ]
    })
  }

  nameChangeHandler = (event) => {
    // console.log(event.target.value)
    // debugger
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 },
      ]
    })
  }

  render() {
    // console.log(this.state)
    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>This is really working!</p>
        <button onClick={() => this.switchNameHandler('Andrew')} >Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} 
                age={this.state.persons[1].age}
                click={this.switchNameHandler.bind(this, 'Chaeyoung')}
                changed={this.nameChangeHandler} 
        >
          My Hobbies: Racing
        </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
