import React from "react";
import { Link } from "react-router-dom";
// import { Navbar,Form,FormControl,Button } from "react-bootstrap";
// import Home from "../Components/Home";

class Nav extends React.Component{

    render() {
        return <div>
                    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                        <a href="#" className="nav navbar-brand">ShopHere</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarText">           
                            <ul className="navbar-nav ml-auto">
                                <form className="form-inline">
                                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                                </form>
                                <li><Link to="Home" className="nav-link">Home</Link></li>
                                <li><Link to="Products" className="nav-link">Products</Link></li>
                                <li><Link to="About" className="nav-link">About Us</Link></li>
                                <li><Link to="Cart" className="nav-link">Cart</Link></li>
                                <li><Link to="Contact" className="nav-link">Contact</Link></li>
                            </ul>
                        </div>
                    </nav>
        </div>
    }
}
export default Nav