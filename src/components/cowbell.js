import React from 'react'

class Cowbell extends React.Component {
  constructor(props) {
    super(props)
    this.state = { noise: '' }

    this.handleCowbellHit = this.handleCowbellHit.bind(this)
  }
  handleCowbellHit(e) {
    console.log('e.target', e.target)
    this.setState(prevState => ({ noise: prevState.noise + 'donk ' }))
  }
  render() {
    console.log('RENDER!', JSON.stringify(this.state, null, 2))
    return (
      <div>
        <ul className="list pl0 mt0 measure center">
          <li className="flex items-center lh-copy pa3 ph0-l bb b--black-10">
            <img
              className="w2 h2 w3-ns h3-ns br-100"
              alt="Bruce Dickenson"
              src="http://wwwcdn.goldminemag.com/wp-content/uploads/WillFerrell_MoreCowbell.jpg"
            />
            <div className="pl3 flex-auto">
              <span className="f6 db black-70">More Cowbell</span>
              <span className="f6 db black-70">
                Bruce Dickenson, Incorprated
              </span>
            </div>
            <div>
              <button
                onClick={this.handleCowbellHit}
                id="5"
                className="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60"
              >
                Donk!
              </button>
            </div>
          </li>
          <p>
            {this.state.noise}{' '}
          </p>

        </ul>
      </div>
    )
  }
  render() {
    return (
      <div>
        <ul className="list pl0 mt0 measure center">
          <li className="flex items-center lh-copy pa3 ph0-l bb b--black-10">
            <img
              className="w2 h2 w3-ns h3-ns br-100"
              alt="Bruce Dickenson"
              src="http://wwwcdn.goldminemag.com/wp-content/uploads/WillFerrell_MoreCowbell.jpg"
            />
            <div className="pl3 flex-auto">
              <span className="f6 db black-70">More Cowbell</span>
              <span className="f6 db black-70">
                Bruce Dickenson, Incorprated
              </span>
            </div>
            <div>
              <button
                onClick={this.handleCowbellHit}
                id="5"
                className="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60"
              >
                Donk!
              </button>
            </div>
          </li>
          <p>
            {this.state.noise}{' '}
          </p>

        </ul>
      </div>
    )
  }
}

export default Cowbell
