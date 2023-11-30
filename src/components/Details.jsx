import React from "react";

class Details extends React.Component{

    render (){
        let {user} = this.props
        return <div>
                <h1>UserDetails </h1>
                {/* <pre>{JSON.stringify(user)}</pre> */}
                <div className="card">
                    <div className="card-header">
                        <img src={user.image} alt="" />
                    </div>
                    <div className="card-body">
                        <h4>Employee ID : {user.id}</h4>
                        <h4>Employee Name : {user.firstName + " " +user.lastName}</h4>
                        <h4>Age : {user.age}</h4>
                        <h4>Gender:{user.gender}</h4>
                    </div>
                </div>
        </div>
    }
}
export default Details