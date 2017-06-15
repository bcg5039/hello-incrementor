import React from 'react'
import Nav from '../containers/nav'
import Title from '../components/title'
const Home = props => {
  return (
    <div className="pa2">
      <Nav />
      <Title>Home</Title>
      <div>
        <p>Hey yall, whats up</p>
      </div>
    </div>
  )
}

export default Home
