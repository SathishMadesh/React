import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component{


    render() {
        return <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <a href="#" className="nav navbar-brand">Logo</a>
            <div className="ml-auto">
                <ul className="navbar-nav">
                    <li><Link to="Home" className="nav-link">Home</Link></li>
                    <li><Link to="Admin" className="nav-link">Admin</Link></li>
                </ul>
            </div>
        </nav>
    }
}

export default Navbar