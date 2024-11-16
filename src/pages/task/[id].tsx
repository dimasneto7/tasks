import { GetServerSideProps } from 'next'
import Head from 'next/head'
import styles from './styles.module.css'

import { db } from '../../services/firebaseConnection'
import { doc, collection, query, where, getDoc } from 'firebase/firestore'

import { Textarea } from '../../components/textarea'

interface TaskProps {
  item: {
    task: string
    created: string
    public: boolean
    user: string
    taskId: string
  }
}

export default function Task({ item }: TaskProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tarefa {item?.task}</title>
      </Head>
      <main className={styles.main}>
        <h1>Tarefa</h1>
        <article className={styles.task}>
          <p>{item.task}</p>
        </article>
      </main>

      <section className={styles.commentsContainer}>
        <h2>Fazer comentário</h2>
        <form>
          <Textarea placeholder="Digite o seu comentário..." />
          <button className={styles.button}>Enviar Comentário</button>
        </form>
      </section>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = params?.id as string

  const docRef = doc(db, 'tasks', id)

  const snapshot = await getDoc(docRef)

  if (snapshot.data() === undefined) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  if (!snapshot.data()?.public) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const miliseconds = snapshot.data()?.created?.seconds * 1000

  const task = {
    task: snapshot.data()?.task,
    public: snapshot.data()?.public,
    created: new Date(miliseconds).toLocaleDateString(),
    user: snapshot.data()?.user,
    taskId: id,
  }

  console.log('task', task)

  return {
    props: {
      item: task,
    },
  }
}
