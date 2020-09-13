/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import * as React from 'react'
import ReactDOM from 'react-dom'
import styles from '../styles.module.css'
import { Props } from '../types/default'

export const Notification = ({
  status = true,
  position = 'top-right',
  animationType = 'pops-up',
  ...props
}: Props) => {
  return (
    <div
      id='react-easy-notify'
      data-testid='react-easy-notify'
      className={`${styles['react-easy-notify']} ${styles[props.type]} ${
        status && styles[animationType]
      } `}
    >
      <div
        className={styles['react-easy-notify-header']}
        data-testid='react-easy-notify-header'
      >
        <div className={styles.title}>{props.title}</div>
        {false && (
          <div className={styles.close} onClick={() => hide()}>
            <i className='fa fa-close' />
          </div>
        )}
      </div>
      <div
        dir='auto'
        data-testid='react-easy-notify-body'
        className={styles['react-easy-notify-body']}
      >
        <span data-testid='message'>{props.message}</span>
      </div>
      <div className={styles['react-easy-notify-body-progress']} />
    </div>
  )
}

const positions = [
  'top-left',
  'top-right',
  'top-center',
  'bottom-left',
  'bottom-right',
  'bottom-center'
]

export const hide = () => {
  const root: any = document.getElementById('react-easy-notify-container')
  // root?.classList.remove(styles[`${props.position}`])
  positions.forEach((p) => {
    root?.classList.remove(styles[p])
  })
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
    hide()
  }, props.timeout)
  return true
}
