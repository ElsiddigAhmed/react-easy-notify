/* eslint-disable no-unused-expressions */
import * as React from 'react'
import ReactDOM from 'react-dom'
import styles from '../styles.module.css'
// eslint-disable-next-line no-unused-vars
import { Props } from '../types/default'

export const Notification = ({
  status,
  position = 'top-right',
  ...props
}: Props) => {
  return (
    <div
      id='react-easy-notify'
      data-testid='react-easy-notify'
      className={`${styles['react-easy-notify']} ${styles[props.type]} ${
        status && styles['react-easy-notify-opened']
      } `}
    >
      <div
        className={styles['react-easy-notify-header']}
        data-testid='react-easy-notify-header'
      >
        <div className={styles.title}>{props.title}</div>
        {/* {!props.autoClose && (
          <div className={styles.close} onClick={() => hide()}>
            <i className='fa fa-close' />
          </div>
        )} */}
      </div>
      <div
        dir='auto'
        data-testid='react-easy-notify-body'
        className={styles['react-easy-notify-body']}
      >
        <span data-testid='message'>{props.message}</span>
      </div>
    </div>
  )
}

export const hide = (props: Props) => {
  const root: any = document.getElementById('react-easy-notify-container')
  root?.classList.remove(styles[`${props.position}`])
  ReactDOM.unmountComponentAtNode(root)
}

export const show = (props: Props): boolean => {
  const root = document.getElementById('react-easy-notify-container')
  const timeout = props.timeout || 400

  root?.classList.add(styles[`${props.position}`])

  ReactDOM.render(<Notification {...props} />, root)

  if (timeout === -1) {
    return false
  }

  setTimeout(() => {
    hide(props)
  }, props.timeout)
  return true
}
