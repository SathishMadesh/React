import React from 'react'
import {Link} from 'react-router-dom'

class Nav extends React.Component{

    render () {
        return <nav className='navbar navbar-dark bg-dark navbar-expand-md'>
                    <a href="#" className='nav navbar-brand'>Logo</a>
                    <div className='ml-auto'>
                        <ul className='navbar-nav'>
                            <li><Link to="Home" className='nav-link'>Home</Link></li>
                            <li><Link to="About" className='nav-link'>About</Link></li>
                            <li><Link to="Skills" className='nav-link'>Skills</Link></li>
                            <li><Link to="Projects" className='nav-link'>Projects</Link></li>
                            <li><Link to="Contact" className='nav-link'>Contact</Link></li>
                        </ul>
                    </div>
                </nav>
    }

}

export default Nav