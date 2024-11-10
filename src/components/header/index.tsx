import styles from './styles.module.css'
import Link from 'next/link'
import Image from 'next/image'

import Logo from '../../../public/assets/logo.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <section className={styles.content}>
        <nav className={styles.nav}>
          <Link href="/" className={styles.logoLink}>
            <Image src={Logo} className={styles.logoImg} alt="Logo" priority />
            <h1 className={styles.logo}>Tasks</h1>
          </Link>
          <Link href="/dashboard" className={styles.dashlink}>
            Meu Painel
          </Link>
        </nav>
        <button className={styles.loginButton}>Acessar</button>
      </section>
    </header>
  )
}
