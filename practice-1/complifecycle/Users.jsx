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
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                            </tr>
                        </thead>
                        <thead>
                            {
                                this.state.users.map((user)=>{
                                    return <tr key = {user.id}>
                                                <td>{user.id}</td>
                                                <td>{user.title}</td>
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