import { createStore } from "redux";
import messageReducer from "./message/msg.reducer";
import { composeWithDevTools } from "@redux-devtools/extension";

let store = createStore(messageReducer,composeWithDevTools())
export {store}