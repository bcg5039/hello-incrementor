import React from 'react'
import Title from '../components/title'

class MedicationAdd extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      amount: 100,
      unit: 'mg',
      description: 'This is a medication.  Use with caution.'
    }
  }

  render() {
    return (
      <div className="pa3">
        <Title>Add a medication</Title>
      </div>
    )
  }
}

export default MedicationAdd
