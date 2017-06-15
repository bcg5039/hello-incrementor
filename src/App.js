import React, { Component } from 'react'
import logo from './logo.svg'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
