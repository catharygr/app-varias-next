"use client";
import Image from "next/image";
import logo from "../image/logo.svg";
import icon from "../image/icon-cart.svg";
import styles from "./nav.module.css";
import Nav from "./Nav";
import { Menu } from "react-feather";
import { useEffect, useState } from "react";
import Drawer from "./Drawer";
import VisuallyHidden from "./VisuallyHidden";
import useToggle from "./use-toggle";

export default function Header() {
  const [estaMenuAbierto, setEstaMenuAbierto] = useToggle(false);
  const [esMovil, setEsMovil] = useState(false);

  return (
    <header className={styles.container}>
      {esMovil ? (
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
      ) : (
        <Nav className={styles.navigationList} />
      )}
      <div className={styles.logo}>
        <Image src={logo} alt="Logo de la empresa" />
      </div>
      <Image className={styles.icon} src={icon} alt="Icono de carrito" />
    </header>
  );
}
