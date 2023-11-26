import React from "react";
import User from './User';

class Emp extends React.Component{

    render () {
        return <div>
            <h2>Emp Companey</h2>
            <pre>{JSON.stringify(this.props)}</pre>
        </div>
    }
}

export default Emp