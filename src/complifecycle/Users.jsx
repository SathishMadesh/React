import React from 'react'
import Axios from 'axios'

class Users extends React.Component{
    state;
    constructor(props){
        super(props);
        this.state = {
            users:[]
        }
    }

    componentDidMount(){
        Axios.get('https://jsonplaceholder.typicode.com/todos')
        .then ((response)=>{
            console.log(response.data)
            this.setState({users:response.data})
        }) 
        .catch ()
    }

    render () {
        return <div>
            {
                this.state.users.length > 0 ? 
                <div> 
                    <table>
                        <tr>
                            <th>UserId</th>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Completed</th>
                        </tr>
                        <thead>
                            {
                                this.state.users.map((user)=>{
                                    return <tr>
                                                <td>{this.users.userId}</td>
                                                <td>{this.users.id}</td>
                                                <td>{this.users.title}</td>
                                                <td>{this.users.completed}</td>
                                            </tr>
                                })
                            }
                        </thead>
                    </table>
                </div> : <div> <h3>No Data</h3> </div>
            }
        </div>
    }
}

export default Users