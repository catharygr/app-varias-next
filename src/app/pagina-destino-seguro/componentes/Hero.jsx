import styles from "./Hero.module.css";
import Image from "next/image";
import desktop from "../image/image-intro-desktop.jpg";
import mobile from "../image/image-intro-mobile.jpg";
import bgPatternRight from "../image/bg-pattern-intro-right-mobile.svg";

export default function Hero() {
  return (
    <div className={styles.heroContainer}>
      <div>
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
    </div>
  );
}
