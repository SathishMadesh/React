import React, { useState } from 'react';

function StdList(props) {

  // const [list, setList] = useState(props.StdList);
  // const [newList, setNewList] = useState([props.StdList]);

  // const deleteHandler = (index) => {
  //   newList.filer((std)=>{
  //     setNewList(std !== index)
  //   });
  // }

  return (
    <div>
      <ul>
        {props.StdList.map((stdName, index) => (
          <li key={index}>{stdName} </li>
        ))}
      </ul>
    </div>
  )
}

export default StdList
