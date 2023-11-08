import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <Link
        className={styles.about}
        href="/producto-comercio-electronico"
      >
        Producto de Comercio Electrónico
      </Link>
      <Link
        className={styles.about}
        href="/carrusel-testominios"
      >
        Carrusel de testimonios
      </Link>
      <Link
        className={styles.about}
        href="/pagina-destino-seguro"
      >
        Página de destino seguro
      </Link>
      <Link
        className={styles.about}
        href="/practica-flexbox"
      >
        Práctica Flex Box
      </Link>
      <Link
        className={styles.about}
        href="/age-calculator-app-main"
      >
        Calculador de edad
      </Link>
      <Link
        className={styles.about}
        href="/easybank-pagina"
      >
        EasyBank página principal
      </Link>
    </main>
  );
}
