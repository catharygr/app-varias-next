"use client";
import styles from "./carrusel.module.css";
import Image from "next/image";
import bg from "@/app/carrusel-testominios/images/pattern-bg.svg";
import tanya from "@/app/carrusel-testominios/images/image-tanya.jpg";
import quotes from "@/app/carrusel-testominios/images/pattern-quotes.svg";
import curve from "@/app/carrusel-testominios/images/pattern-curve.svg";
import john from "@/app/carrusel-testominios/images/image-john.jpg";
import { ChevronLeft } from "react-feather";
import { ChevronRight } from "react-feather";

export default function Carrusel() {
  const miestilo = {
    backgroundImage: `url(${curve.src})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom left",
  };

  return (
    <div style={miestilo} className={styles.container}>
      <div className={styles.carruselDer}>
        <Image className={styles.bg} src={bg} alt="bg" />
        <Image className={styles.persona} src={tanya} alt="tanya" />
        <button className={styles.btn}>
          <div className={styles.chevron}>
            <ChevronLeft />
            <ChevronRight />
          </div>
        </button>
      </div>
      <div className={styles.carruselIzq}>
        <Image className={styles.quotes} src={quotes} alt="quotes" />

        <p className={styles.p}>
          I amve been interested in coding for a while but never taken the jump,
          until now. I could not recommend this course enough. I am now in the
          job of my dreams and so excited about the future.
        </p>
        <div className={styles.parrafo}>
          <p>Tanya Sinclair</p>
          <p className={styles.profesion}> UX Engineer </p>
        </div>
      </div>
    </div>
  );
}
