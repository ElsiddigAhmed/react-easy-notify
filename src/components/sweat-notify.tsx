import React from 'react'
import ReactDOM from 'react-dom'
import styles from '../css/sweat-notify.module.css'
import { ReactComponent as Check } from '../res/check-solid.svg'
import { ReactComponent as Close } from '../res/times-solid.svg'
import { SweatNotify } from '../types/default'

const SweatNotify = (props: SweatNotify) => {
  const hideSweatNotify = () => {
    const root: any = document.getElementById('react-easy-notify-container')

    const sweat: any = document.querySelector('#sweat-notify')
    sweat.classList.add(styles['sweat-notify-reverse'])

    setTimeout(() => {
      ReactDOM.unmountComponentAtNode(root)
    }, 350)
  }

  return (
    <div className={styles['sweat-wrapper']}>
      <Alert hide={hideSweatNotify} {...props} />
    </div>
  )
}

const Alert = ({ hide, ...props }: any) => {
  return (
    <div className={styles['sweat-notify']} id='sweat-notify'>
      <div className={styles.icon}>
        <div className={styles['icon-wrapper']}>
          <Check />
        </div>
      </div>
      <div className={styles.sweat}>
        <div className={styles['sweat-header']}>
          <div>Success</div>
          <div className={styles['sweat-close']}>
            <div onClick={hide} className={styles['close-wrapper']}>
              <Close />
            </div>
          </div>
        </div>
        <hr style={{ margin: 2 }} />
        <div className={styles['sweat-body']}>{props.message}</div>
      </div>
    </div>
  )
}

export const sweatNotify = (props: SweatNotify) => {
  const root = document.getElementById('react-easy-notify-container')
  if (!root?.hasChildNodes()) {
    ReactDOM.render(<SweatNotify {...props} />, root)
  }
}
