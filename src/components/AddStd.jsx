import React, { useState } from 'react';
import './AddStd.css';

function AddStd() {

  const [stdName, setStdName] = useState('');
  const [stdList, setStdList] = useState([]);
  const [checked, setChecked] = useState(false);
  const [updatedStdList, setUpdatedStdList] = useState(stdList);

  const handleChange = (event) => {
    setStdName(event.target.value);
  }

  const handleAdd = () => {
    if(stdName.trim() !== ''){
      setStdList([...stdList, stdName]);
      setStdName('');
    }
  }

  const handleCheck = (event) => {
    setChecked(event.target.checked);
  }
  const handleDelete =(index) = {
    
  }

  return (
    <>
      <div className="container">
        <div className="box">
          <h1>Add New Student</h1>
          <input type="text" value={stdName} onChange={handleChange}/>
          <button onClick={handleAdd}>Add</button>
        </div>
        <div className="std-list">
          <ul>
            {stdList.map((std,index)=>(
              <li key={index}><input type="checkBox" onChange={handleCheck}/>{std}
              <div>
                {console.log(checked)}
                {checked ?(<button onClick={(i)=>handleDelete(index)}> Delete </button>) : null }
              </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default AddStd;