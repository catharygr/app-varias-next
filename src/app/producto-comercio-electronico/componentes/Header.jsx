"use client";
import Image from "next/image";
import logo from "../image/logo.svg";
import icon from "../image/icon-cart.svg";
import styles from "./nav.module.css";
import Nav from "./Nav";
import { Menu } from "react-feather";
import { useState } from "react";
import Drawer from "./Drawer";
import VisuallyHidden from "./VisuallyHidden";

export default function Header() {
  const [estaMenuAbierto, setEstaMenuAbierto] = useState(false);
  return (
    <header className={styles.container}>
      <div>
        <button
          onClick={setEstaMenuAbierto}
          className={styles.hamburgerBtn}
          aria-expanded={estaMenuAbierto}
        >
          <Menu aria-hidden="true" focusable="false" />
          <VisuallyHidden>Menu</VisuallyHidden>
        </button>
        {estaMenuAbierto && (
          <Drawer handleDismiss={setEstaMenuAbierto}>
            <Nav className={styles.navigationList} />
          </Drawer>
        )}
      </div>
      <div className={styles.logo}>
        <Image src={logo} alt="Logo de la empresa" />
      </div>
      <Image className={styles.icon} src={icon} alt="Icono de carrito" />
    </header>
  );
}
