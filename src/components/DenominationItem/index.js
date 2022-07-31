// Write your code here
import './index.css'

const DenominationItem = props => {
  const {cashlist, onIncrement} = props
  const {value} = cashlist

  const changeBalance = () => {
    onIncrement(value)
  }

  return (
    <li>
      <button type="button" className="button1" onClick={changeBalance}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
