export interface Props {
  status: boolean
  style?: object
  type: `success` | `warning` | `danger`
  timeout: number
  message: string
  position?:
    | `top-left`
    | `top-center`
    | `top-right`
    | `bottom-left`
    | `bottom-center`
    | `bottom-right`
  autoClose?: boolean
  title: 'warning' | 'success' | 'danger' | 'خطاء' | 'نجاح' | 'تحذير'
  animationType:
    | 'pops-up'
    | 'fade-in'
    | 'slide-left'
    | 'slide-right'
    | 'vibration'
}

export interface Confirm {
  text: string
  buttonTitle?: string
  callback: Function
}

export interface SweatNotify {
  message: string
  type?: 'success'
}
