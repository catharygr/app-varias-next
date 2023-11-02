import styles from "./age.module.css";
import Image from "next/image";
import src from "./images/icon-arrow.svg";
import "./styles.css";

export default function Home() {
  return (
    <section className={styles.container}>
      <form className={styles.form}>
        <label htmlFor="day">
          Dia
          <input
            type="text"
            id="day"
            placeholder="DD"
            required
          />
          <p
            className={styles.messageError}
            id="messageError"
          ></p>
        </label>
        <label htmlFor="month">
          Mes
          <input
            type="text"
            id="month"
            placeholder="MM"
            required
          />
          <p
            className={styles.messageError}
            id="messageError"
          ></p>
        </label>
        <label htmlFor="year">
          Año
          <input
            type="text"
            id="year"
            placeholder="YYYY"
            required
          />
          <p
            className={styles.messageError}
            id="messageError"
          ></p>
        </label>
        <button
          type="submit"
          id="button"
        >
          <Image
            src={src}
            alt="Flecha hacia abajo que, al hacer clic, muestra la edad de la persona"
            className={styles.iconArrow}
          />
        </button>
      </form>
      <div className={styles.containerData}>
        <p className={styles.text}>
          <span
            className={styles.data}
            id="years"
          >
            - -
          </span>
          años
        </p>
        <p className={styles.text}>
          <span
            className={styles.data}
            id="months"
          >
            - -
          </span>
          meses
        </p>
        <p className={styles.text}>
          <span
            className={styles.data}
            id="days"
          >
            - -
          </span>
          dias
        </p>
        <div id="container-error"></div>
      </div>
    </section>
  );
}
