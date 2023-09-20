"use client";
import styles from "./nav.module.css";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import logo from "./image/logo.svg";
import icon from "./image/icon-cart.svg";
import { useState, useId } from "react";

export default function Nav() {
  const [hoveredNavItem, setHoveredNavItem] = useState(null);
  const id = useId();
  return (
    <nav
      className={styles.container}
      onMouseLeave={() => setHoveredNavItem(null)}
    >
      <div className={styles.image}>
        <Image src={logo} alt="Logo de la empresa" />
      </div>

      <ul className={styles.ul}>
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
      <Image className={styles.icon} src={icon} alt="Icono de carrito" />
    </nav>
  );
}

const data = [
  {
    slug: "collections",
    text: "Collections",
    url: "/producto-comercio-electronico/collections",
  },
  {
    slug: "men",
    text: "Men",
    url: "/producto-comercio-electronico/men",
  },
  {
    slug: "women",
    text: "Women",
    url: "/producto-comercio-electronico/women",
  },
  {
    slug: "about",
    text: "About",
    url: "/producto-comercio-electronico/about",
  },
  {
    slug: "contact",
    text: "Contact",
    url: "/producto-comercio-electronico/contact",
  },
];
