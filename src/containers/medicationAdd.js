import React from 'react'
import OptionButton from '../components/optionButton'
const { propOr } = require('ramda')

class MedicationAdd extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Aspirin',
      amount: 100,
      unit: 'mg',
      description: 'This is a medication.  Use with caution.'
    }

    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleAmountChange = this.handleAmountChange.bind(this)
    this.handleDescChange = this.handleDescChange.bind(this)
    this.handleUnitChange = this.handleUnitChange.bind(this)
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value })
  }

  handleAmountChange(e) {
    this.setState({ amount: e.target.value })
  }

  handleDescChange(e) {
    this.setState({ description: e.target.value })
  }

  handleUnitChange(e) {
    const unitValue = e.target.value
    this.setState({ unit: unitValue })
  }

  render() {
    return (
      <div className="pa3">
        <h2>Controlled Component</h2>
        <article className="black-80">
          <form>
            <fieldset className="ba b--transparent ph0 mh0">
              <div className="mt3">
                <label className="db fw4 lh-copy f6" htmlFor="name">
                  Name
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent w-100 measure"
                  type="text"
                  id="name"
                  size="100"
                  value={this.state.name}
                  onChange={this.handleNameChange}
                />
              </div>
              <div className="mt3">
                <label className="db fw4 lh-copy f6" htmlFor="amount">
                  Amount
                </label>
                <input
                  className="b pa2 input-reset ba bg-transparent"
                  type="number"
                  name="amount"
                  id="amount"
                  min="0"
                  max="1000"
                  onChange={this.handleAmountChange}
                  value={this.state.amount}
                />
              </div>
              <div className="mt3">
                <label className="db fw4 lh-copy f6" htmlFor="unitsMg">
                  Units
                </label>
                <OptionButton
                  value="mg"
                  name="unitMg"
                  selectedValue={this.state.unit}
                  changeEvent={this.handleUnitChange}
                />
                <OptionButton
                  value="ml"
                  name="unitMl"
                  selectedValue={this.state.unit}
                  changeEvent={this.handleUnitChange}
                />
                <OptionButton
                  value="L"
                  name="unitL"
                  selectedValue={this.state.unit}
                  changeEvent={this.handleUnitChange}
                />
              </div>
              <div className="mt3">
                <label className="db fw4 lh-copy f6">
                  Description:

                </label>
                <textarea
                  onChange={this.handleDescChange}
                  value={this.state.description}
                />
              </div>

            </fieldset>
            <input
              className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-pink b--light-gray"
              type="submit"
              value="Submit"
            />
          </form>
        </article>

      </div>
    )
  }
}

export default MedicationAdd
