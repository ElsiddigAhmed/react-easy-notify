import React from 'react'
import ReactDOM from 'react-dom'
import styles from '../css/confirm.module.css'
import { Confirm } from '../types/default'

const Confirm = (props: Confirm) => {
  const hideConfirmation = () => {
    props.callback()
    const element: any = document.getElementById('confirm')
    const root: any = document.getElementById('react-easy-notify-container')
    element.classList.add(styles.hide)
    setTimeout(() => {
      ReactDOM.unmountComponentAtNode(root)
    }, 500)
  }

  return (
    <div className={styles['notification-wrapper']} id='confirm'>
      <div className={styles['body-wrapper']}>
        <div>{props.text}</div>
      </div>
      <div className={styles['confirm-wrapper']}>
        <button onClick={hideConfirmation}>
          {' '}
          {props.buttonTitle || 'Confirm'}
        </button>
      </div>
    </div>
  )
}

export const confirm = (props: Confirm) => {
  const root = document.getElementById('react-easy-notify-container')
  if (!root?.hasChildNodes()) {
    ReactDOM.render(<Confirm {...props} />, root)
  }
}
