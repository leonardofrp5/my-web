import { useState } from 'react'

import Footer from 'components/Footer'

import imgProfile from 'assets/Images/imgProfile.png'
import { ReactComponent as IconGitHub } from 'assets/Images/github.svg'
import { ReactComponent as IconTwitter } from 'assets/Images/twitter.svg'
import { ReactComponent as IconInstagram } from 'assets/Images/instagram.svg'
import { ReactComponent as IconLinkedin } from 'assets/Images/linkedin.svg'

import styles from './styles.module.scss'

function Home () {
  const [theme, setTheme] = useState('dark')
  const [statusCheck, setStatusCheck] = useState(false)

  const toggleTheme = () => {
    setStatusCheck(!statusCheck)
    const newTheme = statusCheck ? 'dark' : 'light'
    setTheme(newTheme)
  }

  return (
    <>
      <div className={`container container--${theme}`}>
        <div className={styles.switch}>
          <input
            type='checkbox'
            className={styles.switch__input}
            id='Switch'
            onChange={() => toggleTheme()}
          />
          <label className={styles.switch__label} htmlFor='Switch'>
            <span className={styles.switch__indicator} />
            <span className={styles.switch__decoration} />
          </label>
        </div>
        <img className={`container--${theme}--imgProfile`} src={imgProfile} alt='img_leonardo' />
        <h3 className={`container--${theme}--title`}>Leonardo Romero Perez</h3>
        <div className={styles.containerIcons}>
          <a href='https://github.com/leonardofrp5' target='_blank' rel='noopener noreferrer'>
            <IconGitHub className={`container--${theme}--icon`} />
          </a>
          <a
            href='https://www.linkedin.com/in/leonardo-fabian-romero-perez-516479168/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <IconLinkedin className={`container--${theme}--icon`} />
          </a>
          <a href='https://twitter.com/leofrp' target='_blank' rel='noopener noreferrer'>
            <IconTwitter className={`container--${theme}--icon`} />
          </a>
          <a href='https://www.instagram.com/dev.leofrp/' target='_blank' rel='noopener noreferrer'>
            <IconInstagram className={`container--${theme}--icon`} />
          </a>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Home
