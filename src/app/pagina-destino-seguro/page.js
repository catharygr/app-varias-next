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
    <div>
      <section className={styles.mainContainer}>
        <nav>
          <Image src={Logo} alt="logo" />

          <div className={`p-nav ${isHamburgerActive ? "nav-mobile" : ""}`}>
            <h3>Sobre Nosotros</h3>
            <h3>Blog</h3>
            <h3>Cuenta</h3>
            <button>Vista previa</button>
            <Image src={BgPatternMobile} alt="bg-pattern-mobile" />
          </div>

          <div className={styles.ham} onClick={Hamburger}>
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
          </div>
        </nav>
        <div className={styles.content}>
          <div className={styles.mainText}>
            <div className={styles.border}></div>
            <h1>Humanizando tu seguro.</h1>
            <p>
              Obtén tu cobertura de seguro de vida de manera más fácil y rápida.
              Combinamos nuestra experiencia y tecnología para ayudarte a
              encontrar el plan que sea adecuado para ti. Asegúrate de que tú y
              tus seres queridos estén protegidos.
            </p>
            <button>Ver planes</button>
            <Image src={BgLeftMobile} alt="#" className="bg-mobile-left" />
            <Image src={BgRightMobile} alt="#" className="bg-mobile-right" />
          </div>

          <div className={styles.mainImage}>
            <Image src={ImageIntroDesktop} alt="#" className="intro-desktop" />
            <Image src={ImageIntroMobile} alt="#" className="intro-mobile" />
          </div>
        </div>

        <Image src={BgLeftDesktop} alt="#" id="bg-left-desktop" />
        <Image src={BgRightDesktop} alt="#" id="bg-right-desktop" />
      </section>
    </div>
  );
}
