import React from 'react'
import { Link } from 'react-router-dom'
export default props => {
  //run some other code here
  return (
    <div className="helvetica fw6 bg-blue pa2">
      <Link className="mr2 white" to="/">Home</Link>
      <Link className="mr2 white" to="/about">About</Link>
      <Link className="mr2 white" to="/incrementor">Incrementor</Link>
      <Link className="mr2 white" to="/medications">Medications</Link>
    </div>
  )
}
