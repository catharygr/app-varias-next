import Nav from "./componentes/nav";
import styles from "./nav.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Nav />
    </div>
  );
}
