export interface Props {
  status: boolean
  style?: object
  type: `success` | `warning` | `danger`
  timeout: number
  message: string
  position?: `top-left` | `top-center` | `top-right`
  autoClose?: boolean
  title: 'warning' | 'success' | 'danger' | 'خطاء' | 'نجاح' | 'تحذير'
}
