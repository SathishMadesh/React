import React, { useState } from 'react';
import './AddStd.css';

function AddStd() {

  const [stdName, setStdName] = useState();
  
  return (
    <>
      <div className="container">
        <div className="box">
          <h1>Add New Student</h1>
          <input type="text" />
          <button>Add</button>
        </div>
      </div>
    </>
  )
}

export default AddStd;