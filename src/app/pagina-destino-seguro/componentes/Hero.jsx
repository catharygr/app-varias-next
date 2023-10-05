import styles from "./Hero.module.css";
import Image from "next/image";
import desktop from "../image/image-intro-desktop.jpg";
import mobile from "../image/image-intro-mobile.jpg";

export default function Hero() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.imagenes}>
        <picture>
          <source
            media="(max-width: .999rem)"
            src={mobile}
            className={styles.mobile}
          />
          <source
            media="(min-width: 35rem)"
            src={desktop}
          />
          <Image
            src={mobile}
            alt="Imagen de una familia"
            priority={true}
          />
        </picture>
      </div>
      <div className={styles.contenidoTexto}>
        <h1 className={styles.h1}>Humanizing your insurance.</h1>
        <p>
          Get your life insurance coverage easier and faster. We blend our
          expertise and technology to help you find the plan that's right for
          you. Ensure you and your loved ones are protected.
        </p>
        <button className={styles.btn}>View Plans</button>
      </div>
    </div>
  );
}
