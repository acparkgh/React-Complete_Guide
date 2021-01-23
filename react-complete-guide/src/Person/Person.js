import React from 'react';

const person = (props) => {
  // console.log(props)
    return (
      <div onClick={props.click} >
        <p>I am {props.name} and I am {props.age} years old!</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name} />
      </div>
    )
}


export default person;