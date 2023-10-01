import styles from "./Nav.module.css";
import Image from "next/image";
import Logo from "@/app/pagina-destino-seguro/images/logo.svg";
import MenuHamburger from "@/app/pagina-destino-seguro/images/icon-hamburger.svg";
import Close from "@/app/pagina-destino-seguro/images/icon-close.svg";
import BgPatternMobile from "@/app/pagina-destino-seguro/images/bg-pattern-mobile-nav.svg";

export default function Nav() {
  return (
    <>
      <nav>
        <Image src={Logo} alt="logo" />

        <div>
          <h3 className={styles.h3}>Sobre Nosotros</h3>
          <h3 className={styles.h3}>Blog</h3>
          <h3 className={styles.h3}>Cuenta</h3>
          <button className={styles.button}>
            <Image src={BgPatternMobile} alt="bgPatternMobile" />
          </button>
        </div>

        <div className={styles.ham}>
          <button className={styles.button}>
            <Image src={MenuHamburger} alt="#" />
            <Image src={Close} alt="#" />
          </button>
        </div>
      </nav>
    </>
  );
}

"use client";
import { motion } from "framer-motion";
import styles from "./nav.module.css";
import Link from "next/link";

import { useState, useId } from "react";

export default function Nav() {
  const [hoveredNavItem, setHoveredNavItem] = useState(null);
  const id = useId();

  return (
    <nav className={styles.nav}>
      <ul className={styles.ul} onMouseLeave={() => setHoveredNavItem(null)}>
        {data.map(({ slug, text, url }) => (
          <li key={slug}>
            {hoveredNavItem === slug && (
              <motion.div
                layoutId={id}
                className={styles.fondo}
                initial={{
                  borderRadius: 10,
                }}
              />
            )}

            <Link
              className={styles.a}
              href={url}
              onMouseEnter={() => setHoveredNavItem(slug)}
            >
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
