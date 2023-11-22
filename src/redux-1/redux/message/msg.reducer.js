 
import {GM,GN} from './msg.action'

let initialstate = {
    msg : "Hello..."
}

let messageReducer = (state=initialstate,action) => {
    console.log(action.type)
    switch (action.type) {
        case GM:
            return {msg:"Good Morning"}
        case GN:
            return {msg:"Good Night"}
    }
}

export default messageReducer