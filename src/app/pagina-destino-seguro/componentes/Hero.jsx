import styles from "./Hero.module.css";
import Image from "next/image";
import desktop from "../image/image-intro-desktop.jpg";
import mobile from "../image/image-intro-mobile.jpg";
import bgPatternRightMobiles from "../image/bg-pattern-intro-right-mobile.svg";
import bgPatternLeftMobiles from "../image/bg-pattern-intro-left-mobile.svg";
// import bgPatternLeftDesktop from "../image/bg-pattern-intro-left-desktop.svg";
// import bgPatternRightDesktop from "../image/bg-pattern-intro-right-desktop.svg";

export default function Hero() {
  return (
    <section className={styles.section}>
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
      </div>
    </section>
  );
}
