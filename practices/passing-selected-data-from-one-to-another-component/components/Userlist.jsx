import React from "react";
import Details from "./Details";

class Userlist extends React.Component{

    selectUser = (user) => {
        this.props.getUser(user)
    }

    render (){
        let {users} = this.props
        return <div>
            {/* <pre>{JSON.stringify(users)}</pre> */}
            {
                users.length > 0 ? <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Emp ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Age</th>
                                <th>Gender</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user)=>{
                                    return <tr key={user.id} onClick={this.selectUser.bind(this,user)}>
                                        <td>{user.id}</td>
                                        <td>{user.firstName}</td>
                                        <td>{user.lastName}</td>
                                        <td>{user.age}</td>
                                        <td>{user.gender}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div> : <div></div>
            }
        </div>
    }
}
export default Userlist