/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import * as React from 'react'
import { show } from './components'
import { Props } from './types/default'
import styles from './styles.module.css'

export class EasyNotify extends React.Component {
  static notify(props: Props) {
    const element = document.getElementById('react-easy-notify-container')

    if (!element?.hasChildNodes()) {
      show(props)
    }
    return false
  }

  render() {
    return (
      <div
        id='react-easy-notify-container'
        className={styles['react-easy-notify-container']}
        data-testid='react-easy-notify-container'
      />
    )
  }
}
