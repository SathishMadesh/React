import React from "react";
import Navbar from "./navbar/Navbar"
import { BrowserRouter as Router, Routes , Route  } from "react-router-dom";

import Home from "./components/Home";
import Admin from "./components/Admin";

class App extends React.Component{

    render(){
        return <div>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="Home" element={<Home/>}/>
                    <Route path="Admin" element={<Admin/>}/>
                </Routes>
            </Router>
        </div>
    }
}

export default App