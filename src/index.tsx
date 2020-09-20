import * as React from 'react'
import styles from './css/notify.module.css'

export { notify } from './components/notify'
export { confirm } from './components/confirm'
export const EasyNotify = () => {
  return (
    <div
      id='react-easy-notify-container'
      className={styles['react-easy-notify-container']}
      data-testid='react-easy-notify-container'
    />
  )
}
