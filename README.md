# react-easy-notify

> A React Library For Notifications

[![NPM](https://img.shields.io/npm/v/react-easy-notify.svg)](https://www.npmjs.com/package/react-easy-notify) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Introduction

This is a notification library for making fast, easy to use and lightweight alert window. There are two types of notifications:

- alert window.
- confirmation window.

## Install

```bash
npm install --save react-easy-notify
```

## Demo

[see demo https://react-easy-notify.netlify.app](https://react-easy-notify.netlify.app)

## Usage

## Sweat Notify is Here

you can now use a new theme of [react-easy-notify](https://react-easy-notify.netlify.app). SweatNotify is a lightweight fast and easy to use for simple notifications.

## Code Snippet

```jsx
import React from 'react'
import { ReactEasyNotify, sweatNotify } from 'react-easy-notify'
import 'react-easy-notify/dist/index.css'

const onClick = () => {
  sweatNotify({
    message:
      "hello world's alert, here is my sweat one for you , it's awesome, isn't it?"
  })
}

const App = () => {
  return (
    <div>
      <ReactEasyNotify />
      <button onClick={onClick}>sweat</button>
    </div>
  )
}
export default App
```

### How to use the notify

```jsx
import React from 'react'

import { ReactEasyNotify, notify } from 'react-easy-notify'
import 'react-easy-notify/dist/index.css'

const options = {
  type: 'success',
  title: 'success',
  status: true,
  timeout: 5000,
  message: 'hi there, here is my awesome alert message',
  position: 'top-right',
  animationType: 'pops-up'
}

const App = () => {
  return (
    <div>
      <button onClick={() => notify(options)}>click me</button>
      <EasyNotify />
    </div>
  )
}

export default App
```

### How to use the confirm

confirm provides a callback function, it can be used with cookies or similar things
here is an example

```jsx
import React from 'react'

import { ReactEasyNotify, confirm } from 'react-easy-notify'
import 'react-easy-notify/dist/index.css'

const options = {
  text: 'your message or text here',
  callback: function () {
    // will run after confirming
  }
}

const App = () => {
  return (
    <div>
      <button onClick={() => confirm(options)}>click me</button>
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
