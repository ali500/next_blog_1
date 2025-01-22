'use client'
import styles from './styles.module.css'

export default function DarkModeButton() {
  let isOn: boolean = false

  const handleButton = (): void => {
    if (!isOn) {
      document.documentElement.setAttribute('data-theme', 'dark')
      isOn = true
    } else {
      document.documentElement.setAttribute('data-theme', 'light')
      isOn = false
    }
  }

  return (
    <label className={styles.switch}>
      <input onClick={handleButton} type="checkbox" />
      <span className={styles.slider + ' ' + styles.round}></span>
    </label>
  )
}
