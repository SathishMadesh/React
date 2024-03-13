import React, { useState } from 'react';
import './AddStd.css';
import StdList from './StdList';

function AddStd() {

  const [stdName, setStdName] = useState('');
  const [stdList, setStdList] = useState([]);

  const handleChange = (event) => {
    setStdName(event.target.value);
  }

  const handleAdd = () => {
    if(stdName.trim() !== ''){
      setStdList([...stdList, stdName]);
      setStdName('');
    }
  }

  return (
    <>
      <div className="container">
        <div className="box">
          <h1>Add New Student</h1>
          <input type="text" value={stdName} onChange={handleChange}/>
          <button onClick={handleAdd}>Add</button>
          <StdList stdList={stdList}/>
        </div>
      </div>
    </>
  )
}

export default AddStd;