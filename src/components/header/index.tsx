import styles from './styles.module.css'
import { useSession, signIn, signOut } from 'next-auth/react'
import Link from 'next/link'
import Image from 'next/image'

import Logo from '../../../public/assets/logo.svg'

export function Header() {
  const { data: session, status } = useSession()
  return (
    <header className={styles.header}>
      <section className={styles.content}>
        <nav className={styles.nav}>
          <Link href="/" className={styles.logoLink}>
            <Image src={Logo} className={styles.logoImg} alt="Logo" priority />
            <h1 className={styles.logo}>Tasks</h1>
          </Link>
          {session?.user && (
            <Link href="/dashboard" className={styles.dashlink}>
              Meu Painel
            </Link>
          )}
        </nav>
        {status === 'loading' ? (
          <></>
        ) : session ? (
          <button className={styles.loginButton} onClick={() => signOut()}>
            Olá {session?.user?.name}
          </button>
        ) : (
          <button className={styles.loginButton} onClick={() => signIn()}>
            Acessar
          </button>
        )}
      </section>
    </header>
  )
}
