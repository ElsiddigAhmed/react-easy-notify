/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import * as React from 'react'
import { hide, show } from './components'
import styles from './styles.module.css'
import { Props } from './types/default'

export class EasyNotify extends React.Component {
  static notify(props: Props) {
    const element = document.getElementById('react-easy-notify-container')
    element?.classList.add(styles[`${props.position}`])
    if (!element?.hasChildNodes()) {
      const timeout = props.timeout || 400

      show(props)

      if (timeout === -1) {
        return false
      }

      setTimeout(() => {
        hide()
      }, props.timeout)
    }
    return false
  }

  render() {
    return (
      <div
        id='react-easy-notify-container'
        data-testid='react-easy-notify-container'
      />
    )
  }
}
