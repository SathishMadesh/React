import React from 'react'
import Nav from './Single-page-app/Navbar/Nav'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './Single-page-app/Components/Home'
import About from './Single-page-app/Components/About'
import Skills from './Single-page-app/Components/Skills'
import Projects from './Single-page-app/Components/Projects'
import Contact from './Single-page-app/Components/Contact'

class App extends React.Component{
  render () {
    return <div>
      <Router>
        <Nav/>
        <Routes>
          <Route path='Home' element={<Home/>}/>
          <Route path='About' element={<About/>}/>
          <Route path='Skills' element={<Skills/>}/>
          <Route path='Projects' element={<Projects/>}/>
          <Route path='Contact' element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
  }
}

export default App
