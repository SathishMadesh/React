import React from "react";
import Emp from "./Emp";

class User extends React.Component{
    user = {
        name:'Sathish',
        email:'sathish@gmail.com',
        loc:'Salem'
    }
    render () {
        return <div>
            <h2>User Companey</h2>
            <Emp user = {this.user} />
        </div>
    }
}

export default User