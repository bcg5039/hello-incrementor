import React from 'react'
import { Link } from 'react-router-dom'
export default props => {
  //run some other code here
  return (
    <div className="helvetica fw6 bg-blue pa2">
      <Link className="mr2" to="/">Home</Link>
      <Link className="mr2" to="/about">About</Link>
      <Link className="mr2" to="/incrementor">Incrementor</Link>
    </div>
  )
}
