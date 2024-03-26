import React, { useState } from 'react';

function StdList(props) {

  const [newList, setNewList] = 

  const deleteHandler = (index) => {

  }

  return (
    <div>
      <ul>
        {props.stdList.map((stdName, index) => (
          <li key={index}>{stdName} <button onClick={()=>{deleteHandler(index)}}>Delete</button> </li>
        ))}
      </ul>
    </div>
  )
}

export default StdList
