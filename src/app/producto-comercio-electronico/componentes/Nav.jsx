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

const data = [
  {
    slug: "collections",
    text: "Collections",
    url: "/producto-comercio-electronico/collections",
  },
  {
    slug: "men",
    text: "Men",
    url: "#",
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
