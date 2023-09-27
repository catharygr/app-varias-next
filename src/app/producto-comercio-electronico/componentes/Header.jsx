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
import Collections from "./Collections";

export default function Header() {
  const [estaMenuAbierto, setEstaMenuAbierto] = useToggle(false);
  const [esMovil, setEsMovil] = useState(true);

  useEffect(() => {
    if (window.innerWidth < 800) {
      setEsMovil(true);
    } else {
      setEsMovil(false);
    }

    function handleResize() {
      if (window.innerWidth < 800) {
        setEsMovil(true);
      } else {
        setEsMovil(false);
      }
    }
    const listener = window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", listener);
    };
  }, []);

  return (
    <>
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
          <Image priority={true} src={logo} alt="Logo de la empresa" />
        </div>
        <Image className={styles.icon} src={icon} alt="Icono de carrito" />
      </header>
      <div>
        <Collections />
      </div>
    </>
  );
}
