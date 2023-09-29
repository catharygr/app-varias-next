"use client";
import styles from "./destino.module.css";
import Image from "next/image";
import Logo from "@/app/pagina-destino-seguro/images/logo.svg";
import MenuHamburger from "@/app/pagina-destino-seguro/images/icon-hamburger.svg";
import Close from "@/app/pagina-destino-seguro/images/icon-close.svg";
import BgPatternMobile from "@/app/pagina-destino-seguro/images/bg-pattern-mobile-nav.svg";
import BgLeftMobile from "@/app/pagina-destino-seguro/images/bg-pattern-intro-left-mobile.svg";
import BgRightMobile from "@/app/pagina-destino-seguro/images/bg-pattern-intro-right-mobile.svg";
import BgLeftDesktop from "@/app/pagina-destino-seguro/images/bg-pattern-intro-left-desktop.svg";
import BgRightDesktop from "@/app/pagina-destino-seguro/images/bg-pattern-intro-right-desktop.svg";
import ImageIntroDesktop from "@/app/pagina-destino-seguro/images/image-intro-desktop.jpg";
import ImageIntroMobile from "@/app/pagina-destino-seguro/images/image-intro-mobile.jpg";

import { useState } from "react";

export default function PaginaDestinoSeguro() {
  const [isHamburgerActive, setIsHamburgerActive] = useState(false);

  const Hamburger = () => {
    if (isHamburgerActive === false) {
      setIsHamburgerActive(true);
    } else {
      setIsHamburgerActive(false);
    }
  };

  return (
    <div className={styles.containerPrincipal}>
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
      <section className={styles.mainContainer}>
        <div className={styles.content}>
          <div className={styles.mainText}>
            <div className={styles.border}></div>
            <h1 className={styles.h1}>Humanizando tu seguro.</h1>
            <p className={styles.p}>
              Obtén tu cobertura de seguro de vida de manera más fácil y rápida.
              Combinamos nuestra experiencia y tecnología para ayudarte a
              encontrar el plan que sea adecuado para ti. Asegúrate de que tú y
              tus seres queridos estén protegidos.
            </p>
            <button className={styles.button}>Ver planes</button>
            <Image src={BgLeftMobile} alt="#" className={styles.bgMobileLeft} />
            <Image
              src={BgRightMobile}
              alt="#"
              className={styles.bgMobileRight}
            />
          </div>

          <div className={styles.mainImage}>
            <Image
              src={ImageIntroDesktop}
              alt="#"
              className={styles.introDesktop}
            />
            <Image
              src={ImageIntroMobile}
              alt="#"
              className={styles.introMobile}
            />
          </div>
        </div>

        {/* <Image src={BgLeftDesktop} alt="#" id={styles.bgLeftDesktop} />
        <Image src={BgRightDesktop} alt="#" id={styles.bgRightDesktop} /> */}
      </section>
    </div>
  );
}
