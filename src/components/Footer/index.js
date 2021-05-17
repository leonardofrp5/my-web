import styles from './styles.module.scss'

function Footer () {
  const year = new Date().getFullYear()
  return <footer className={styles.footer}>Fabricated by Leonardo Romero Copyright © {year}</footer>
}

export default Footer
