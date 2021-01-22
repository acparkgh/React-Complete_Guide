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
      { name: 'Andrew', age: 52 },
    ],
  }
  
  switchNameHandler = () => {
    // console.log('was clicked!')
    // debugger

    console.log(this.state.persons)


  }

  render() {
    // console.log(this.state)
    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler} >Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} >My Hobbies: Racing</Person>
        <Person name={this.state.persons[3].name} age={this.state.persons[3].age} />
      </div>
    );
  }
}

export default App;
