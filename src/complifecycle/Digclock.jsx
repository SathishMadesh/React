import React from "react";

class Digclock extends React.Component{
    
    //constructor exicute first
    constructor (props) {
        super(props);
        //this.dtime = new Date().toLocaleTimeString();
        this.state = {
            dtime : new Date().toLocaleTimeString()
        }
    }
    //componentDidMount exicute at third without calling
    componentDidMount(){
        setInterval(()=>{
            this.setState({dtime:new Date().toLocaleTimeString()})
        },1000)
    }

    //render returns UI and it exicute second
    render () {
        return <div>
            <h1>Digital Clock</h1>
            <h2>{this.state.dtime}</h2>
        </div>
    }


}

export default Digclock