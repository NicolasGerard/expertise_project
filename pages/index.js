import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Phone Heaven</title>
        <meta name="description" content="Bibliotheque d'informations sur les modèles de téléphones et leurs spécifications" />
        <link rel="icon" href="/smartphone.png" />
      </Head>

      <header>
        <div>
        </div>
      </header>

      <main className={styles.main}>
       
      </main>

      <footer className={styles.footer}>
      <a href="https://www.flaticon.com/free-icons/smartphone" title="smartphone icons">Smartphone icons created by Good Ware - Flaticon</a>
      </footer>
    </div>
  )
}
