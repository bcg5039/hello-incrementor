import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import About from './pages/about'
import Incrementor from './pages/incrementor'
import Medications from './pages/medications'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/incrementor" component={Incrementor} />
          <Route path="/medications" component={Medications} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
