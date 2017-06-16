import React from 'react'
import MedicationAdd from '../containers/medicationAdd'
import Nav from '../containers/nav'
import Title from '../components/title'
import Footer from '../containers/footer'
import Header from '../containers/header'

const Medications = props =>
  <div className="bg-light-blue">
    <Header />
    <Nav />
    <Title>Medications</Title>
    <MedicationAdd />
    <Footer />
  </div>
export default Medications
