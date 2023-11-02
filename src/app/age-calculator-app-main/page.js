"use client";
import { useState, useRef, useEffect } from "react";
import styles from "./age.module.css";
import Image from "next/image";
import src from "./images/icon-arrow.svg";
import "./styles.css";

export default function Home() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [years, setYears] = useState("--");
  const [months, setMonths] = useState("--");
  const [days, setDays] = useState("--");
  const [error, setError] = useState("");
  const dayRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!day || !month || !year) {
      setError("Todos los campos son obligatorios");
      return;
    }

    const inputDay = parseInt(day);
    const inputMonth = parseInt(month);
    const inputYear = parseInt(year);

    if (
      isNaN(inputDay) ||
      isNaN(inputMonth) ||
      isNaN(inputYear) ||
      inputDay < 1 ||
      inputDay > 31 ||
      inputMonth < 1 ||
      inputMonth > 12
    ) {
      setError("Fecha no válida");
      return;
    }

    const currentDate = new Date();
    const inputDate = new Date(inputYear, inputMonth - 1, inputDay);

    if (inputDate > currentDate) {
      setError("La fecha está en el futuro");
      return;
    }

    const ageInMilliseconds = currentDate - inputDate;
    const ageInYears = Math.floor(
      ageInMilliseconds / (365 * 24 * 60 * 60 * 1000)
    );
    const ageInMonths = Math.floor(
      (ageInMilliseconds / (30 * 24 * 60 * 60 * 1000)) % 12
    );
    const ageInDays = Math.floor(
      (ageInMilliseconds / (24 * 60 * 60 * 1000)) % 30
    );

    setYears(ageInYears);
    setMonths(ageInMonths);
    setDays(ageInDays);

    setError("");
    // Restablecer los valores de los campos de entrada
    setDay("");
    setMonth("");
    setYear("");
  };

  useEffect(() => {
    // Establecer el enfoque en el campo de día al cargar la página
    dayRef.current.focus();
  }, []);

  return (
    <section className={styles.container}>
      <form
        className={styles.form}
        onSubmit={handleSubmit}
      >
        <label htmlFor="day">
          Día
          <input
            type="text"
            id="day"
            placeholder="DD"
            required
            value={day}
            onChange={(e) => setDay(e.target.value)}
            ref={dayRef}
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
            value={month}
            onChange={(e) => setMonth(e.target.value)}
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
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
          <p
            className={styles.messageError}
            id="messageError"
          >
            {error}
          </p>
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
            {years}
          </span>
          años
        </p>
        <p className={styles.text}>
          <span
            className={styles.data}
            id="months"
          >
            {months}
          </span>
          meses
        </p>
        <p className={styles.text}>
          <span
            className={styles.data}
            id="days"
          >
            {days}
          </span>
          días
        </p>
        <div id="container-error"></div>
      </div>
    </section>
  );
}
