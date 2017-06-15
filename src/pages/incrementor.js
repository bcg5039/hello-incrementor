import React from 'react'
import Nav from '../containers/nav'
import Title from '../components/title'
import Footer from '../containers/footer'
import Header from '../containers/header'

const Incrementor = props =>
  <div className="bg-light-blue">
    <Header />
    <Nav />
    <Title>Incrementor</Title>
    <Footer />
  </div>
export default Incrementor
