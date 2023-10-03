import styles from "./Nav.module.css";
import Image from "next/image";
import Logo from "@/app/pagina-destino-seguro/images/logo.svg";
import MenuHamburger from "@/app/pagina-destino-seguro/images/icon-hamburger.svg";
import Close from "@/app/pagina-destino-seguro/images/icon-close.svg";
import BgPatternMobile from "@/app/pagina-destino-seguro/images/bg-pattern-mobile-nav.svg";
import { motion } from "framer-motion";

export default function Nav() {
  return (
    <>
      <nav>
        <Image
          src={Logo}
          alt="logo"
        />

        <div>
          <h3 className={styles.h3}>Sobre Nosotros</h3>
          <h3 className={styles.h3}>Blog</h3>
          <h3 className={styles.h3}>Cuenta</h3>
          <button className={styles.button}>
            <Image
              src={BgPatternMobile}
              alt="bgPatternMobile"
            />
          </button>
        </div>

        <div className={styles.ham}>
          <button className={styles.button}>
            <Image
              src={MenuHamburger}
              alt="#"
            />
            <Image
              src={Close}
              alt="#"
            />
          </button>
        </div>
      </nav>
    </>
  );
}

const data = [
  {
    slug: "sobre nosotros",
    text: "Sobre Nosotros",
    url: "/producto-comercio-electronico/sobre-nosotros",
  },
  {
    slug: "blog",
    text: "Blog",
    url: "#",
  },
  {
    slug: "cuenta",
    text: "Cuenta",
    url: "/producto-comercio-electronico/cuenta",
  },
];
