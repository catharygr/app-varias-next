import styles from "./SubHeroDos.module.css";
import Image from "next/image";
import howWeWorkDesktop from "../image/bg-pattern-how-we-work-desktop.svg";
import howWeWorkMobile from "../image/bg-pattern-how-we-work-mobile.svg";

export default function SubHeroDos() {
  return (
    <div className={styles.container}>
      <Image
        src={howWeWorkDesktop}
        alt="how we work desktop"
        className={styles.desktop}
      />
      <Image
        src={howWeWorkMobile}
        alt="how we work mobile"
        className={styles.mobile}
      />

      <h2 className={styles.h2}>Find out more about how we work</h2>
      <button className={styles.btn}>How we work</button>
    </div>
  );
}
