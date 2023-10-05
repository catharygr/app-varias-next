import styles from "./Hero.module.css";
import Image from "next/image";
import desktop from "image/image-intro-desktop.jpg";
import mobile from "image/image-intro-mobile.jpg";

export default function Hero() {
  return (
    <div className={styles.heroContainer}>
      <div>
        <picture>
          <source
            media="(max-width: 49.999rem)"
            srcset="
                /images/image-intro-mobile.jpg
                "
          />
          <source
            media="(min-width: 50rem)"
            srcset="
                /images/image-intro-desktop.jpg
                "
          />
          <Image
            src=" /images/image-intro-mobile.jpg"
            alt="Imagen de una familia"
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
