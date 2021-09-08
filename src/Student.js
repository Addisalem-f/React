import React from 'react'
export default function Student(props){

  return(
    <div>
      Name:{props.name}
      age: {props.age}
      <input
      type='button'
      value='delete'
      onClick={props.myClickHandler}
      // onClick={props.myClickHandler}
      />
    <input
    type='text'
   onChange= {props.nameChanged}
    />
    <input
    type='text'
   onChange= {props.ageChanged}
    />
       </div>
  )
  
}