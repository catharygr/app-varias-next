import styles from "./SubHeroUno.module.css";
import Image from "next/image";
import iconSnappyProcess from "../image/icon-snappy-process.svg";
import affordablePrices from "../image/icon-affordable-prices.svg";
import peopleFirst from "../image/icon-people-first.svg";

export default function SubHeroUno() {
  return (
    <div className={styles.iconosContainer}>
      <h2>We are different</h2>

      <div className={styles.contenidoIconos}>
        <div className={styles.centrarIconos}>
          <Image
            src={affordablePrices}
            alt=""
            className={styles.formaIconos}
          />
          <h3>Affordable Prices</h3>
          <p className={styles.p}>
            We don't want you worrying about high monthly costs. Our prices may
            be low, but we still offer the best coverage possible.
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
            Our plans aren't full of conditions and clauses to prevent payouts.
            We make sure you're covered when you need it.
          </p>
        </div>
      </div>
    </div>
  );
}
