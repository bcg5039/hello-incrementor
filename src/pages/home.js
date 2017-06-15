import React from 'react'
import Nav from '../containers/nav'
import Title from '../components/title'
import Footer from '../containers/footer'
import Header from '../containers/header'

const Home = props => {
  return (
    <div className="bg-light-blue">
      <Header />
      <Nav />
      <Title>Home</Title>
      <div>
        <p>Hey yall, whats up</p>
      </div>
      <Footer />
    </div>
  )
}

export default Home
