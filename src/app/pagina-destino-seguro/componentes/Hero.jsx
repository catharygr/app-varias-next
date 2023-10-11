import styles from "./Hero.module.css";
import Image from "next/image";
import desktop from "../image/image-intro-desktop.jpg";
import mobile from "../image/image-intro-mobile.jpg";
import bgPatternRight from "../image/bg-pattern-intro-right-mobile.svg";
import bgPatternLeft from "../image/bg-pattern-intro-left-mobile.svg";

export default function Hero() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.picture}>
        <picture>
          <source
            media="(max-width: .999rem)"
            src={mobile}
          />
          <source
            media="(min-width: 35rem)"
            src={desktop}
          />
          <Image
            src={mobile}
            alt="Imagen de una familia"
            priority={true}
            className={styles.img}
          />
        </picture>
      </div>

      <div className={styles.contenidoTexto}>
        <Image
          src={bgPatternLeft}
          className={styles.bgPatternLeft}
        />
        <h1 className={styles.h1}>Humanizing your insurance.</h1>
        <p>
          Get your life insurance coverage easier and faster. We blend our
          expertise and technology to help you find the plan that's right for
          you. Ensure you and your loved ones are protected.
        </p>
        <button className={styles.btn}>View Plans</button>
        <Image
          src={bgPatternRight}
          className={styles.patternRight}
        />
      </div>
    </div>
  );
}
