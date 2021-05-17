import styles from './styles.module.scss'

function Switch ({ toggleTheme }) {
  return (
    <div className={styles.switch}>
      <input type='checkbox' className={styles.switch__input} id='Switch' onChange={() => toggleTheme()} />
      <label className={styles.switch__label} htmlFor='Switch'>
        <span className={styles.switch__indicator} />
        <span className={styles.switch__decoration} />
      </label>
    </div>
  )
}

export default Switch
