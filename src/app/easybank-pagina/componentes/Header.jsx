"use client";
import styles from "./Header.module.css";
import Image from "next/image";
import Logo from "../images/logo.svg";
import ButtonMenuMobile from "../images/buttonMenuMobile.svg";
import ButtonCloseMenuMobile from "../images/icon-close.svg";
import NavegacionMobiles from "./NavegacionMobiles";
import React, { useState } from "react";
import Drawer from "./Drawer";
import useToggle from "../../easybank-pagina/componentes/use-toggle";
import VisuallyHidden from "./VisuallyHidden";

function Header() {
  const [esMovil, esSetMovil] = useState(true);
  const [estaMenuAbierto, setEstaMenuAbierto] = useToggle(false);
  return (
    <>
      <header className={styles.container}>
        <Image
          src={Logo}
          alt="logo"
          className={styles.logo}
          priority={true}
        />
        {esMovil ? (
          <ul className={styles.list_desktop}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
        ) : (
          <ul className={styles.list_mobile}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
        )}

        <button className={styles.button_desktop}>Request Invite</button>
        <Image
          src={estaMenuAbierto ? ButtonCloseMenuMobile : ButtonMenuMobile}
          alt="buttonMenuMobile"
          className={
            estaMenuAbierto
              ? styles.buttonMenuMobileClose
              : styles.buttonMenuMobile
          }
          onClick={() => setEstaMenuAbierto(!estaMenuAbierto)}
        />
      </header>
      {estaMenuAbierto && <NavegacionMobiles />}
    </>
  );
}

export default Header;

{
  /* <>
<header className={styles.container}>
  {esMovil ? (
    <div>
      <button
        onClick={setEstaMenuAbierto}
        className={styles.hamburgerBtn}
        aria-expanded={estaMenuAbierto}
      >
        <Menu
          aria-hidden="true"
          focusable="false"
        />
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
    <Image
      priority={true}
      src={logo}
      alt="Logo de la empresa"
    />
  </div>
  <Image
    className={styles.icon}
    src={icon}
    alt="Icono de carrito"
  />
</header> */
}
