import imgProfile from 'assets/Images/imgProfile.png'
import { ReactComponent as IconGitHub } from 'assets/Images/github.svg'
import { ReactComponent as IconTwitter } from 'assets/Images/twitter.svg'
import { ReactComponent as IconInstagram } from 'assets/Images/instagram.svg'
import { ReactComponent as IconLinkedin } from 'assets/Images/linkedin.svg'
import styles from './styles.module.scss'

function Home () {
  return (
    <>
      <div className={styles.container}>
        <img className={styles.imgProfile} src={imgProfile} alt='img_leonardo' />
        <h3 className={styles.title}>Leonardo Romero Perez</h3>
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
    </>
  )
}

export default Home
