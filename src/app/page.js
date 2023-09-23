import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <Link className={styles.about} href="/producto-comercio-electronico">
        Producto de Comercio Electrónico
      </Link>
      <Link className={styles.about} href="/carrusel-testominios">
        Carrusel de testimonios
      </Link>
    </main>
  );
}
