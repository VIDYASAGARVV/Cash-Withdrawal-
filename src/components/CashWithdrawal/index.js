// Write your code
import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  onIncrement = value => {
    this.setState(prevState => ({
      balance: prevState.balance - value,
    }))
    const {balance, btnvalue} = this.state
    console.log(balance, btnvalue)
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    return (
      <div className="mC1">
        <div className="c1">
          <p className="p1">s</p>
          <h1>Sarah Williams</h1>
        </div>
        <div className="c3">
          <p>your balance</p>
          <div className="c2">
            <p>{balance}</p>
            <p>In Rupees</p>
          </div>
        </div>
        <div>
          <p>Withdraw</p>
          <p>CHOOSE SUM (IN RUPEES)</p>
          <ul className="list1">
            {denominationsList.map(each => (
              <DenominationItem
                cashlist={each}
                key={each.id}
                onIncrement={this.onIncrement}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
