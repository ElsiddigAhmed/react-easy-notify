# react-easy-notify

> A React Library For Notifications;

[![NPM](https://img.shields.io/npm/v/react-easy-notify.svg)](https://www.npmjs.com/package/react-easy-notify) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-easy-notify
```

## Demo

[see demo](https://react-easy-notify.netlify.app)

## Usage

### Typescript

```tsx
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
  animationType: 'pops-up'
}

const App = () => {
  const callNot = () => {
    EasyNotify.notify(options)
  }
  return (
    <div>
      <button
        onClick={callNot}
      >
        click me
      </button>
      <EasyNotify />
    </div>
  )
}

export default App
```

### Javascript

```jsx
import React from 'react'

import { EasyNotify } from 'react-easy-notify'
import 'react-easy-notify/dist/index.css'

const options = {
  type: 'success',
  title: 'success',
  status: true,
  timeout: 5000,
  message: 'hi there, here is my awesome alert message',
  position: 'top-right'
  animationType: 'pops-up'
}

const App = () => {
  const callNot = () => {
    EasyNotify.notify(options)
  }
  return (
    <div>
      <button
        onClick={callNot}
      >
        click me
      </button>
      <EasyNotify />
    </div>
  )
}

export default App
```

### Available Options

| Option          | Description                                                                                                                                                  | Example                                 |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------- |
| `status`        | the status for running notification, if false the alert window will not appear                                                                               | <code>status: true</code>               |
| `type`          | the alert type, there are three types <code>success</code>, <code>warning</code>, <code>danger</code>                                                        | <code>type: "success"</code>            |
| `title`         | the alert title will appear in the header                                                                                                                    | <code>title: "Hi there"</code>          |
| `message`       | alert message will appear in the body, it can be of any language                                                                                             | <code>message: "success message"</code> |
| `timeout`       | the alert window duration by millisecond                                                                                                                     | <code>timeout: 500</code>               |
| `position`      | you can put the alert at many places in the browser window, the available options are <code>top-left</code>, <code>top-right</code>, <code>top-center</code> | <code>position: "top-right"</code>      |
| `animationType` | you can also choose an animation type you want from many available types                                                                                     | <code>animationType: pops-up</code>     |

## Position

| property        |
| --------------- |
| `top-left`      |
| `top-right`     |
| `top-center`    |
| `bottom-left`   |
| `bottom-right`  |
| `bottom-center` |

## AnimationType

| property      | description                           |
| ------------- | ------------------------------------- |
| `fade-in`     | fading alert window without animation |
| `pops-up`     | pop up animation                      |
| `slide-left`  | slide left alert window with fading   |
| `slide-right` | slide right alert window with fading  |
| `vibration`   | vibrating in the alert window         |

## License

MIT © [AlsiddigAhmed](https://github.com/AlsiddigAhmed)
