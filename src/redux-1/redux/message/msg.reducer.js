 
import {GM,GN} from './msg.action'

let initialState = {
    msg : "Hello..."
}

let messageReducer = (state=initialState,action) => {
    console.log("current State", state)
    console.log(action.type)
    switch (action.type) {
        case 'GM':
            return {msg : "Good Morning"}
        case 'GN':
            return {msg:"Good Night"}
        default:
            return state;
    }
}

export {messageReducer , initialState}