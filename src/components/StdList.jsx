import React from 'react'

function StdList(props) {

  

  return (
    <div>
      <ul>
        {props.stdList.map((stdName, index) => (
          <li key={index}>{stdName} <button onClick={deleteHandler}>Delete</button> </li>
        ))}
      </ul>
    </div>
  )
}

export default StdList
