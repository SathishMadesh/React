import React, {useState} from "react";

import { useDispatch,useSelector } from "react-redux"

import { gmAction, gnAction } from "../redux/message/msg.action"


const Message = () => {

    const dispatch = useDispatch ();

    let message = useSelector((state)=>{
        return state;
    })

    let gmHandler = () => {
        dispatch(gmAction());
    }

    let gnHandler = () => {
        dispatch(gnAction());
    }

    return <div>
        <h1>Message : {message.msg}</h1>
        <button onClick={gmHandler}>GM</button>
        <button onClick={gnHandler}>GN</button>
    </div>
}

export default Message