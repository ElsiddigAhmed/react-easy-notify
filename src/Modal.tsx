import * as React from 'react'
import styles from './css/modal.module.css'
import { ReactComponent as Close } from './res/times-solid.svg'
interface props {
  status: boolean
  children?: any
  onHide: any
}

export default (props: props) => {
  const hideModal = () => {
    const modal: any = document.querySelector('#modal')

    setTimeout(() => {
      props.onHide()
    }, 400)

    return modal?.classList.replace(styles.modal, styles['hide-modal'])
  }

  return props.status ? (
    <div id='modal' className={`${styles.modal} `}>
      <div className={styles.close} onClick={hideModal}>
        <Close />
      </div>
      {props.children}
    </div>
  ) : null
}
