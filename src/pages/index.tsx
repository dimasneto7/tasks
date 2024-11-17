import { GetStaticProps } from 'next'
import Head from 'next/head'
import styles from '@/styles/home.module.css'
import Image from 'next/image'

import heroImg from '../../public/assets/hero.jpg'

import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/services/firebaseConnection'

interface HomeProps {
  posts: number
  comments: number
}

export default function Home({ posts, comments }: HomeProps) {
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
            <span>+{posts} posts</span>
          </section>
          <section className={styles.box}>
            <span>+{comments} comentários</span>
          </section>
        </div>
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const commentsRef = collection(db, 'comments')
  const postRef = collection(db, 'tasks')

  const commentSnapshot = await getDocs(commentsRef)
  const postSnapshot = await getDocs(postRef)
  return {
    props: {
      posts: postSnapshot.size || 0,
      comments: commentSnapshot.size || 0,
    },
    revalidate: 60, // 60 segundos
  }
}
