import React from "react";
import Axios from "axios";
import Userlist from "./Userlist";
import Details from "./Details";

class Users extends React.Component{

    constructor(props){
        super(props)
        this.state={usersData:{},selectUser:{}}
    }

    getSelectedUser = (user) => {
        this.setState({selectUser:user})
    }

    componentDidMount(){
        Axios.get('https://dummyjson.com/users')
        .then((response)=>{
            this.setState({usersData:response.data})
        })
        .catch((err)=>{})
    }

    render () {

        let {usersData} = this.state

        let {selectUser} = this.state

        return <div className="container">
                        <div className="row">
                            <div className="col-8">
                                {/* <pre>{JSON.stringify(usersData)}</pre> */}
                                {
                                    Object.keys(usersData).length > 0 ? <div><Userlist users = {usersData.users}  getUser={this.getSelectedUser}/></div> : null
                                }
                            </div>
                            <div className="col-4">
                                    {
                                        Object.keys(usersData).length > 0 ? <div><Details user={selectUser}/></div> : null
                                    }
                            </div> 
                        </div>
                </div>
    }
}
export default Users