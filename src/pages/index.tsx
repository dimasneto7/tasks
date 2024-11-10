import Head from 'next/head'
import styles from '@/styles/home.module.css'
import Image from 'next/image'

import heroImg from '../../public/assets/hero.jpg'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tasks</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.logoContent}>
          <Image
            src={heroImg}
            className={styles.hero}
            alt="Logo Tasks"
            priority
          />
        </div>
        <h1 className={styles.title}>Organize suas Tarefas</h1>
        <div className={styles.infoContent}>
          <section className={styles.box}>
            <span>+12 posts</span>
          </section>
          <section className={styles.box}>
            <span>+90 comentários</span>
          </section>
        </div>
      </main>
    </div>
  )
}
