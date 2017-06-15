import React from 'react'
import Nav from '../containers/nav'
import Title from '../components/title'
import Footer from '../containers/footer'
import Header from '../containers/header'
import Banner from '../containers/banner'

const Home = props => {
  return (
    <div className="bg-light-blue">
      <Banner />
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
