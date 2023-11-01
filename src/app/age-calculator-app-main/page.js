import styles from "./age.module.css";
import Image from "next/image";
import src from "./images/icon-arrow.svg";

export default function Home() {
  return (
    <section className={styles.container}>
      <form className={styles.form}>
        <label htmlFor="day">
          Dia
          <input
            type="number"
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
            type="number"
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
            type="number"
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
            alt="Seta para baixo que ao clicar mostra a idade da pessoa"
            className="icon-arrow"
          />
        </button>
      </form>
      <div className={styles}>
        <p className={styles.text}>
          <span
            className={styles.data}
            id="years"
          >
            - -
          </span>
          anos
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
