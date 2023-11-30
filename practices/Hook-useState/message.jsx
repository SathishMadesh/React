import React from "react";
import { useState } from "react";

const Message = () => {

    // directly giving the values

    let [msg,setmsg] = useState("Hello")

    return <div>
       <h1>Messag: {msg}</h1>
    </div>
}

export default Message 