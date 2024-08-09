import './index.css'
import {Component} from 'react'

class CoinToss extends Component {
  state = {
    head: 0,
    tail: 0,
    total: 0,
    toss: true,
  }

  onChangeCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if(tossResult === 0) {
      this.setState(eachHead => {
        return {head: eachHead.head + 1}
      })
      this.setState(totalToss => {
        return {total: totalToss.total + 1}
      })
      this.setState({toss: true})
    }
    else {
      this.setState(eachTail => {
        return {tail: eachTail.tail + 1}
      })
      this.setState(totalToss => {
        return {total: totalToss.total + 1}
      })
      this.setState({toss: false})
    }
  }

  render() {
    const {head,tail,total,toss} = this.state
    return (
      <>
        <div className="app-container">
          <div className="container">
            <h1 className="heading">Coin Toss Game</h1>
            <p className="tail-text">Heads (or) Tails</p>
            {
              toss ? 
                (
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
                    alt="toss result"
                    className="toss-img"
                  />
                )
                :
                (
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
                    alt="toss result"
                    className="toss-img"
                  />
                )
            }
            <button
              type="button"
              className="button"
              onClick={this.onChangeCoin}
            >
              Toss Coin
            </button>
            <div className="result-container">
              <p className="result">Total: {total}</p>
              <p className="result">Heads: {head}</p>
              <p className="result">Tails: {tail}</p>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default CoinToss 
