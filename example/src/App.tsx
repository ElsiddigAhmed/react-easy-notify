import React from 'react'

import { EasyNotify } from 'react-easy-notify'
import { Props } from 'react-easy-notify/dist/types/default'
import 'react-easy-notify/dist/index.css'

const options: Props = {
  type: 'success',
  title: 'success',
  status: true,
  timeout: 5000,
  message: 'hi there, here is my awesome alert message',
  position: 'top-right'
}

const App = () => {
  const callNot = () => {
    EasyNotify.notify(options)
  }
  return (
    <div>
      <button
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: `translate(-50%,-50%)`
        }}
        onClick={callNot}
      >
        click me
      </button>
      <EasyNotify />
    </div>
  )
}

export default App
