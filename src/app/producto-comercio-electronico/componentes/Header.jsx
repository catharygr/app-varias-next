"use client";
import Image from "next/image";
import logo from "../image/logo.svg";
import icon from "../image/icon-cart.svg";
import styles from "./nav.module.css";
import Nav from "./Nav";
import { Menu } from "react-feather";
import { useState } from "react";

export default function Header() {
  const [estaMenuAbierto, setEstaMenuAbierto] = useState(false);
  return (
    <header className={styles.container}>
      <div>
        <button onClick={setEstaMenuAbierto}>
          <Menu className={styles.hamburgerBtn} />
          {estaMenuAbierto && <Nav className={styles.navigationList} />}
        </button>
      </div>
      <div className={styles.logo}>
        <Image src={logo} alt="Logo de la empresa" />
      </div>
      <Image className={styles.icon} src={icon} alt="Icono de carrito" />
    </header>
  );
}
