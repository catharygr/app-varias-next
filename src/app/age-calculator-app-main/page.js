import styles from "./age.module.css";
import Image from "next/image";
import src from "./images/icon-arrow.svg";

export default function Home() {
  return (
    <section className={styles.container}>
      <form className={styles.form}>
        <label for="day">
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
        <label for="month">
          Mês
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
        <label for="year">
          Ano
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
      <div className="container-data">
        <p className="text">
          <span
            className="data"
            id="years"
          >
            - -
          </span>
          anos
        </p>
        <p className="text">
          <span
            className="data"
            id="months"
          >
            - -
          </span>
          meses
        </p>
        <p className="text">
          <span
            className="data"
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
