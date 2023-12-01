import React from "react";
import Navbar from "./navbar/Navbar"
import { BrowserRouter as Router, Routes , Route  } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Users from "./components/Users";


class App extends React.Component{

    render(){
        return <div>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="Home" element={<Home/>}/>
                    <Route path="About" element={<About/>}/>
                    <Route path="Users" element={<Users/>}/>
                </Routes>
            </Router>
        </div>
    }
}

export default App