import styles from "./Hero.module.css";
import Image from "next/image";
import desktop from "../image/image-intro-desktop.jpg";
import mobile from "../image/image-intro-mobile.jpg";
import bgPatternRightMobiles from "../image/bg-pattern-intro-right-mobile.svg";
import bgPatternLeftMobiles from "../image/bg-pattern-intro-left-mobile.svg";
import bgPatternLeftDesktop from "../image/bg-pattern-intro-left-desktop.svg";
import bgPatternRightDesktop from "../image/bg-pattern-intro-right-desktop.svg";
import iconSnappyProcess from "../image/icon-snappy-process.svg";
import affordablePrices from "../image/icon-affordable-prices.svg";
import peopleFirst from "../image/icon-people-first.svg";

export default function Hero() {
  return (
    <>
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
            src={bgPatternLeftMobiles}
            alt="Patrón de fondo"
            className={styles.bgPatternLeftMobiles}
          />
          <div></div>
          <h1 className={styles.h1}>Humanizing your insurance.</h1>
          <p>
            Get your life insurance coverage easier and faster. We blend our
            expertise and technology to help you find the plan that's right for
            you. Ensure you and your loved ones are protected.
          </p>
          <button className={styles.btn}>View Plans</button>
          <Image
            src={bgPatternRightMobiles}
            alt="Patrón de fondo"
            className={styles.patternRight}
          />
        </div>
      </div>
      <div className={styles.iconosContainer}>
        <h2>We are different</h2>

        <div className={styles.contenidoIconos}>
          <div className={styles.centrarIconos}>
            <Image
              src={iconSnappyProcess}
              alt=""
              className={styles.formaIconos}
            />
            <h3>Snappy Process</h3>
            <p className={styles.p}>
              Our application process can be completed in minutes, not hours.
              Don't get stuck filling in tedious forms.
            </p>
          </div>
          <div className={styles.centrarIconos}>
            <Image
              src={affordablePrices}
              alt=""
              className={styles.formaIconos}
            />
            <h3>Affordable Prices</h3>
            <p className={styles.p}>
              We don't want you worrying about high monthly costs. Our prices
              may be low, but we still offer the best coverage possible.
            </p>
          </div>
          <div className={styles.centrarIconos}>
            <Image
              src={peopleFirst}
              alt=""
              className={styles.formaIconos}
            />
            <h3>People First</h3>
            <p className={styles.p}>
              Our plans aren't full of conditions and clauses to prevent
              payouts. We make sure you're covered when you need it.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
