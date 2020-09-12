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
  const [animationType, setAnimationType] = useState('pops-up')
  const callNot = () => {
    EasyNotify.notify({ ...options, type, position, animationType })
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
          <option>Alert Position</option>
          <option>top-left</option>
          <option>top-right</option>
          <option>top-center</option>
          <option>bottom-left</option>
          <option>bottom-right</option>
          <option>bottom-center</option>
        </select>
        <select
          value={animationType}
          onChange={({ target }) => setAnimationType(target.value)}
        >
          <option>Alert Animation Type</option>
          <option>pops-up</option>
          <option>fade-in</option>
          <option>slide-left</option>
          <option>slide-right</option>
          <option>vibration</option>
        </select>
        <button onClick={callNot}>click me</button>
      </div>
      <EasyNotify />
    </div>
  )
}

export default App
