import styles from "../../styles/Home.module.css";
import Head from "next/head";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <Head>
        <title>The Phone Library</title>
        <meta
          name="description"
          content="Bibliotheque d'informations sur les modèles de téléphones et leurs spécifications"
        />
        <link rel="icon" href="/smartphone.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Arvo&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header className={styles.headerContainer}>
        <h1 className={styles.titre}>
          The <br /> Phone <br /> Library
        </h1>

        <div className={styles.linksContainer}>
          <Link href="/">
            <p className={styles.links}>Voir tout les modèles</p>
          </Link>

          <a className={styles.links}>Samsung</a>
          <a className={styles.links}>Iphone</a>
          <a className={styles.links}>OnePlus</a>
        </div>
      </header>
    </>
  );
}
