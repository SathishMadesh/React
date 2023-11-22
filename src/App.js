import React from "react";
import Message from "./redux-1/Message/Msg";
import { Provider } from "react-redux";
import { store } from "./redux-1/redux/store";

class App extends React.Component{

    render (){
        return <div>
            <Provider store={store}>
                <Message/>
            </Provider>
        </div>
    }
}

export default App