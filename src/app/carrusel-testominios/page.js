import styles from "./carrusel.module.css";
import Image from "next/image";
import bg from "@/app/carrusel-testominios/images/pattern-bg.svg";
import tanya from "@/app/carrusel-testominios/images/image-tanya.jpg";
import quotes from "@/app/carrusel-testominios/images/pattern-quotes.svg";
import curve from "@/app/carrusel-testominios/images/pattern-curve.svg";

export default function Carrusel() {
  return (
    <div className={styles.container}>
      <div className={styles.carruselDer}>
        <Image className={styles.bg} src={bg} alt="bg" />
        <Image className={styles.persona} src={tanya} alt="tanya" />
      </div>
      <div className={styles.carruselIzq}>
        <Image className={styles.curve} src={curve} alt="curve" />
        <Image className={styles.quotes} src={quotes} alt="quotes" />
        <p>
          I amve been interested in coding for a while but never taken the jump,
          until now. I could not recommend this course enough. I am now in the
          job of my dreams and so excited about the future.{" "}
        </p>
        <div>
          <p> Tanya Sinclair </p>
          <p> UX Engineer </p>
        </div>
      </div>
    </div>
  );
}
