import React from 'react'

class Incr extends React.Component {
  constructor(props) {
    super(props)
    console.log('IM ALIVE. initializing state to 0')
    this.state = { total: 0, isOdd: 0 }
    this.incrementCount = this.incrementCount.bind(this)
    this.decrementCount = this.decrementCount.bind(this)
  }

  incrementCount = () => {
    this.setState((prevState, props) => ({
      total: prevState.total + props.incrementor,
      isOdd: (prevState.total + props.incrementor) % 2
    }))
  }

  decrementCount = () => {
    this.setState((prevState, props) => ({
      total: prevState.total - props.decrementor,
      isOdd: (prevState.total - props.decrementor) % 2
    }))
  }

  componentDidMount() {
    console.log(
      `componentDidMount() updating our state to ${this.props.initialValue}`
    )
    this.setState({
      total: this.props.initialValue,
      isOdd: this.props.initialValue % 2
    })
  }

  render() {
    console.log(`RENDER! ${JSON.stringify(this.state, null, 2)}`)
    return (
      <div className="pl3">
        <h1>Total: {this.state.total}</h1>
        <h2>Odd?: {this.state.isOdd === 1 ? 'True' : 'False'}</h2>
        <button
          className="f6 link dim br2 ph3 pv2 mb2 dib white bg-navy"
          type="Button"
          onClick={this.incrementCount}
        >
          +
        </button>
        <button
          className="f6 link dim br2 ph3 pv2 mb2 dib white bg-navy"
          type="Button"
          onClick={this.decrementCount}
        >
          -
        </button>
      </div>
    )
  }
}
export default Incr
