import React from 'react'

import { EasyNotify } from 'react-easy-notify'
// import { Props } from 'react-easy-notify/dist/types/default'
import 'react-easy-notify/dist/index.css'
import 'bootstrap/dist/css/bootstrap.css'
const options = {
  type: 'success',
  title: 'success',
  status: true,
  timeout: 500000,
  message: 'hi there, here is my awesome alert message',
  position: 'top-right'
}

const App = () => {
  const position = (position) => {
    EasyNotify.notify({ ...options, position })
  }
  const type = (type) => {
    EasyNotify.notify({ ...options, type })
  }
  const animation = (animationType) => {
    EasyNotify.notify({ ...options, animationType })
  }

  return (
    <div className='text-center my-container'>
      <div className='wrapper'>
        <div className='contents'>
          <p>Choose Position</p>

          <div>
            <button
              className='btn btn-primary m-1'
              onClick={() => position('top-left')}
            >
              Top Left
            </button>
            <button
              className='btn btn-primary m-1'
              onClick={() => position('top-center')}
            >
              Top Center
            </button>
            <button
              className='btn btn-primary m-1'
              onClick={() => position('top-right')}
            >
              Top Right
            </button>
          </div>
          <div>
            <button
              className='btn btn-primary m-1'
              onClick={() => position('bottom-left')}
            >
              Bottom Left
            </button>
            <button
              className='btn btn-primary m-1'
              onClick={() => position('bottom-center')}
            >
              Bottom Center
            </button>
            <button
              className='btn btn-primary m-1'
              onClick={() => position('bottom-right')}
            >
              Bottom Right
            </button>
          </div>
        </div>
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
