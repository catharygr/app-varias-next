import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <section className="container">
      <form className="form">
        <label for="day">
          Dia
          <input
            type="number"
            id="day"
            placeholder="DD"
            required
          />
          <p
            className="messageError"
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
            className="messageError"
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
            className="messageError"
            id="messageError"
          ></p>
        </label>
        <button
          type="submit"
          id="button"
        >
          <Image
            src="assets/images/icon-arrow.svg"
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
