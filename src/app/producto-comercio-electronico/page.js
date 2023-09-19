"use client";
import styles from "./nav.module.css";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useId } from "react";

export default function Nav() {
  const [hoveredNavItem, setHoveredNavItem] = useState(null);
  const id = useId();
  return (
    <nav
      className={styles.container}
      onMouseLeave={() => setHoveredNavItem(null)}
    >
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
    </nav>
  );
}

const data = [
  {
    slug: "collections",
    text: "Collections",
    url: "/",
  },
  {
    slug: "men",
    text: "Men",
    url: "/men",
  },
  {
    slug: "women",
    text: "Women",
    url: "/women",
  },
  {
    slug: "about",
    text: "About",
    url: "/about",
  },
  {
    slug: "contact",
    text: "Contact",
    url: "/contact",
  },
];
