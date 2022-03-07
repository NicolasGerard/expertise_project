import Link from "next/link";

import styles from "../styles/Home.module.css";

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      {posts.map((element) => {
        return (
          <div key={element.id} className={styles.phoneDiv}>
            <h3>{element.name}</h3>
            <p>{element.released_at}</p>
            <p>{element.battery_size}</p>
            <p>{element.battery_type}</p>
            <p>{element.body}</p>
            <Link href={"/details/" + element.id}>Voir détails</Link>
          </div>
        );
      })}
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/hello");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}
