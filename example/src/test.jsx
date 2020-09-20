import React from 'react'
import './test.css'
import { EasyNotify, showConfirmation } from 'react-easy-notify'
export default () => {
  return (
    <div>
      <button onClick={showConfirmation}>Confirm</button>
      <EasyNotify />
    </div>
  )
}
