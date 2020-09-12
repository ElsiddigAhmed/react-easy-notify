import React, { useState } from 'react'

import { EasyNotify } from 'react-easy-notify'
// import { Props } from 'react-easy-notify/dist/types/default'
import 'react-easy-notify/dist/index.css'

const options = {
  type: 'success',
  title: 'success',
  status: true,
  timeout: 3000,
  message: 'hi there, here is my awesome alert message',
  position: 'top-right'
}

const App = () => {
  const [type, setType] = useState('success')
  const [position, setPosition] = useState('top-right')
  const callNot = () => {
    EasyNotify.notify({ ...options, type, position })
  }
  return (
    <div>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: `translate(-50%,-50%)`
        }}
      >
        <p>select alert options</p>
        <select value={type} onChange={({ target }) => setType(target.value)}>
          <option>Alert Type</option>
          <option>success</option>
          <option>warning</option>
          <option>danger</option>
        </select>
        <select
          value={position}
          onChange={({ target }) => setPosition(target.value)}
        >
          <option>Alert Type</option>
          <option>top-left</option>
          <option>top-right</option>
          <option>top-center</option>
          <option>bottom-left</option>
          <option>bottom-right</option>
          <option>bottom-center</option>
        </select>
        <button onClick={callNot}>click me</button>
      </div>
      <EasyNotify />
    </div>
  )
}

export default App
