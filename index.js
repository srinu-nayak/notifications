const Notification = props => {
  const {className, iconUrl, message} = props
  return (
    <div className={`main-card ${className}`}>
      <img className='image' src={iconUrl} />
      <p>{message}</p>
    </div>
  )
}

const element = (
  <div className='bg-container'>
    <div className='card'>
      <h1 className='main-heading'>Notifications</h1>
      <li className='list'>
        <Notification
          className=' card1'
          iconUrl='https://assets.ccbp.in/frontend/react-js/primary-icon-img.png'
          message='Information message'
        />
        <Notification
          className=' card2'
          iconUrl='https://assets.ccbp.in/frontend/react-js/success-icon-img.png'
          message='Success message'
        />
        <Notification
          className=' card3'
          iconUrl='https://assets.ccbp.in/frontend/react-js/warning-icon-img.png'
          message='Warning message'
        />
        <Notification
          className=' card4'
          iconUrl='https://assets.ccbp.in/frontend/react-js/danger-icon-img.png'
          message='Error message'
        />
      </li>
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
