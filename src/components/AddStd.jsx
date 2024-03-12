import React, { useState } from 'react';
import './AddStd.css';
import StdList from './StdList';

function AddStd() {

  const [stdName, setStdName] = useState('');
  const [displayStd, setDisplayStd] = useState('');

  const handleChange = (event) => {
    setStdName(event.target.value);
  }

  const handleAdd = () => {
    setDisplayStd(stdName);
  }

  return (
    <>
      <div className="container">
        <div className="box">
          <h1>Add New Student</h1>
          <input type="text" value={stdName} onChange={handleChange}/>
          <button onClick={handleAdd}>Add</button>
          <StdList displayStd={displayStd}/>
        </div>
      </div>
    </>
  )
}

export default AddStd;