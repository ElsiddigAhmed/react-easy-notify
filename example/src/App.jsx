import React from 'react'

import { EasyNotify, notify, confirm } from 'react-easy-notify'
import 'react-easy-notify/dist/index.css'

import 'bootstrap/dist/css/bootstrap.css'
const options = {
  type: 'success',
  title: 'success',
  status: true,
  timeout: 5000,
  message: 'hi there, here is my awesome alert message',
  position: 'top-right'
}

const App = () => {
  const type = (type) => {
    notify({ ...options, type, title: type })
  }
  const animation = (animationType) => {
    notify({ ...options, animationType })
  }

  const confirmation = () => {
    confirm({
      text: `hey there, this is my awesome confirmation window which can be used easy by just invoking one function`,
      callback: () => alert('worked (^_^)')
    })
  }

  return (
    <div className='text-center my-container'>
      <div className='wrapper'>
        {/* alert types*/}
        <div className='contents'>
          <p>Choose Alert Type</p>

          <button
            className='btn btn-success m-1'
            onClick={() => type('success')}
          >
            Success
          </button>
          <button
            className='btn btn-warning m-1'
            onClick={() => type('warning')}
          >
            Warning
          </button>
          <button className='btn btn-danger m-1' onClick={() => type('danger')}>
            Danger
          </button>
          <button className='btn btn-secondary m-1' onClick={confirmation}>
            Confirm
          </button>
        </div>

        {/* alert animation type */}
        <div className='contents'>
          <p>Choose Animation Type</p>

          <button
            className='btn btn-primary m-1'
            onClick={() => animation('pops-up')}
          >
            Pops-up
          </button>
          <button
            className='btn btn-primary m-1'
            onClick={() => animation('fade-in')}
          >
            Fade-in
          </button>
          <button
            className='btn btn-primary m-1'
            onClick={() => animation('slide-left')}
          >
            Slide Left
          </button>
          <button
            className='btn btn-primary m-1'
            onClick={() => animation('slide-right')}
          >
            Slide Right
          </button>
          <button
            className='btn btn-primary m-1'
            onClick={() => animation('vibration')}
          >
            Vibration
          </button>
        </div>
      </div>
      <EasyNotify />
    </div>
  )
}

export default App
