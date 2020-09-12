/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import * as React from 'react'
import { show } from './components'
import { Props } from './types/default'

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
        data-testid='react-easy-notify-container'
      />
    )
  }
}
