"use client";
import styles from "./Nav.module.css";
import Image from "next/image";
import Logo from "@/app/pagina-destino-seguro/images/logo.svg";
import MenuHamburger from "@/app/pagina-destino-seguro/images/icon-hamburger.svg";
import Close from "@/app/pagina-destino-seguro/images/icon-close.svg";
import { useState } from "react";

export default function Nav() {
  const [isHamburgerActive, setIsHamburgerActive] = useState(false);

  const Hamburger = () => {
    if (isHamburgerActive === false) {
      setIsHamburgerActive(true);
    } else {
      setIsHamburgerActive(false);
    }
  };
  const navMobile = styles.navMobile;

  const BgPatternMobile = styles.BgPatternMobile;

  return (
    <>
      <nav>
        <Image src={Logo} alt="logo" />

        <div className={` pNav ${isHamburgerActive ? navMobile : ""}`}>
          <h3 className={styles.h3}>Sobre Nosotros</h3>
          <h3 className={styles.h3}>Blog</h3>
          <h3 className={styles.h3}>Cuenta</h3>
          <button className={styles.button}>
            <Image src={BgPatternMobile} alt="bgPatternMobile" />
          </button>
        </div>

        <div className={styles.ham} onClick={Hamburger}>
          <button className={styles.button}>
            <Image
              src={MenuHamburger}
              alt="#"
              className={isHamburgerActive ? "hidden" : "block"}
            />
            <Image
              src={Close}
              alt="#"
              className={isHamburgerActive ? "block" : "hidden"}
            />
          </button>
        </div>
      </nav>
    </>
  );
}
