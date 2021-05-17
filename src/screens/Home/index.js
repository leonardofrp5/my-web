import { useState, useEffect } from 'react'

import Footer from 'components/Footer'
import Switch from 'components/Switch'

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

  useEffect(() => {
    const body = document.querySelector('body')
    //eslint-disable-line
    const currentTheme = !theme ? window.localStorage.getItem('theme') || 'dark' : theme
    body.setAttribute('theme', currentTheme)
    setTheme(currentTheme)
  }, [theme])

  return (
    <>
      <Switch toggleTheme={toggleTheme} />
      <div className={styles.containerAboutMe}>
        <img className={styles.imgProfile} src={imgProfile} alt='img_leonardo' />
        <h3 className={styles.title}>Leonardo Romero Perez</h3>
        <div className={styles.aboutMe}>
          <p className={styles.paragraph}>
            Hi, I'm Leonardo Romero, a passionate self-taught web developer and a system engineer from
            Colombia. My passion for software lies with dreaming up ideas and making them come true with
            elegant interfaces, and code quality of the things I build.
          </p>
          <p className={styles.paragraph}>
            I like to work with people that care more for the people and work together for an objectiveI like
            to work with people that care more for the people and work together for an objective
          </p>
          <p className={styles.paragraph}>Made in Cúcuta and deployed in Medellín</p>
        </div>
        <div className={styles.containerIcons}>
          <a href='https://github.com/leonardofrp5' target='_blank' rel='noopener noreferrer'>
            <IconGitHub className={styles.icon} />
          </a>
          <a
            href='https://www.linkedin.com/in/leonardo-fabian-romero-perez-516479168/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <IconLinkedin className={styles.icon} />
          </a>
          <a href='https://twitter.com/leofrp' target='_blank' rel='noopener noreferrer'>
            <IconTwitter className={styles.icon} />
          </a>
          <a href='https://www.instagram.com/dev.leofrp/' target='_blank' rel='noopener noreferrer'>
            <IconInstagram className={styles.icon} />
          </a>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home
