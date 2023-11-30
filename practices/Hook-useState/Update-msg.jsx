import React from 'react';
import { useState } from 'react';


const Updatemsg = () => {

    let [msg,setmsg] = useState("Hello")

    let gmHandler = () => {
        return setmsg("Good Morning")
    }

    let gnHandler = () => {
        return setmsg("Good Night")
    }

    return <div>
        <h1>Message:{msg}</h1>
        <button onClick={gmHandler}>GM</button>
        <button onClick={gnHandler}>GN</button>
    </div>
}

export default Updatemsg