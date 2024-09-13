import './index.css'

const TabItem = props => {
  const {tabDetails, fun, activeStatus} = props
  const {displayText, tabId} = tabDetails

  const clickedItem = () => {
    fun(tabId)
  }
  const activated = activeStatus ? 'active-tab-btn' : ''
  return (
    <li className="tab-item-container ">
      <button
        onClick={clickedItem}
        type="button"
        className={`tab-btn ${activated}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
