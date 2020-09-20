/* eslint-disable no-unused-vars */
import React from 'react'
import { EasyNotify, notify } from './index'
import { render } from '@testing-library/react'

const options: any = {
  status: true,
  type: 'success',
  position: 'top-center',
  timeout: 5000,
  title: 'success',
  autoClose: false,
  message: 'something'
}

describe('EasyNotify', () => {
  it('is truthy', () => {
    expect(EasyNotify).toBeTruthy()
  })
  it('should mount without errors', () => {
    const { getByTestId } = render(<EasyNotify />)

    expect(getByTestId('react-easy-notify-container')).toBeTruthy()
    expect(getByTestId('react-easy-notify-container').firstChild).toBeFalsy()
    expect(getByTestId('react-easy-notify-container').id).toBe(
      'react-easy-notify-container'
    )
    expect(getByTestId('react-easy-notify-container').tagName).toBe('DIV')
  })
  it('should render react-easy-notify when calling notify function', () => {
    const { getByTestId, getByText } = render(<EasyNotify />)
    const message =
      'should render react-easy-notify when calling notify function'
    notify({ ...options, message })

    expect(getByTestId('message').textContent).toBe(message)
    expect(getByTestId('message').textContent).toBeDefined()
    expect(getByTestId('message').textContent).toBeTruthy()

    expect(getByText(options.title)).toBeDefined()
    expect(getByText(options.title)).toBeTruthy()
  })

  it('alert window title should be success if title is success', () => {
    const { getByTestId } = render(<EasyNotify />)
    notify({ ...options, title: 'success' })

    expect(getByTestId('react-easy-notify-header').textContent).toBeDefined()
    expect(getByTestId('react-easy-notify-header').textContent).toBe('success')
  })
  it('alert window title should be warning if title is warning', () => {
    const { getByTestId } = render(<EasyNotify />)
    notify({ ...options, title: 'warning' })

    expect(getByTestId('react-easy-notify-header').textContent).toBeDefined()
    expect(getByTestId('react-easy-notify-header').textContent).toBe('warning')
  })
  it('alert window title should be danger if title is danger', () => {
    const { getByTestId } = render(<EasyNotify />)
    notify({ ...options, title: 'danger' })

    expect(getByTestId('react-easy-notify-header').textContent).toBeDefined()
    expect(getByTestId('react-easy-notify-header').textContent).toBe('danger')
  })
  it('alert window title should be تحذير if title is تحذير', () => {
    const { getByTestId } = render(<EasyNotify />)
    notify({ ...options, title: 'تحذير' })

    expect(getByTestId('react-easy-notify-header').textContent).toBeDefined()
    expect(getByTestId('react-easy-notify-header').textContent).toBe('تحذير')
  })
  it('alert window title should be خطاء if title is خطاء', () => {
    const { getByTestId } = render(<EasyNotify />)
    notify({ ...options, title: 'خطاء' })

    expect(getByTestId('react-easy-notify-header').textContent).toBeDefined()
    expect(getByTestId('react-easy-notify-header').textContent).toBe('خطاء')
  })
  it('alert window title should be نجاح if title is نجاح', () => {
    const { getByTestId } = render(<EasyNotify />)
    notify({ ...options, title: 'نجاح' })

    expect(getByTestId('react-easy-notify-header').textContent).toBeDefined()
    expect(getByTestId('react-easy-notify-header').textContent).toBe('نجاح')
  })
  it('alert message should be from right to left if language is arabic', () => {
    const { getByTestId } = render(<EasyNotify />)
    notify({ ...options, message: 'نجاح', title: 'نجاح' })
    expect(getByTestId('react-easy-notify-body').dir).toBe('auto')
  })
})
