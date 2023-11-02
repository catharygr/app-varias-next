"use client";

import React, { useState } from "react";
import styles from "./age.module.css";
import Image from "next/image";
import src from "./images/icon-arrow.svg";
import "./styles.css";

export default function Home() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [error, setError] = useState("");

  const validateDate = (day, month, year) => {
    // Validar que los campos no estén vacíos
    if (!day || !month || !year) {
      return "Todos los campos son obligatorios";
    }

    // Validar que el día esté entre 1 y 31
    if (day < 1 || day > 31) {
      return "El día debe estar entre 1 y 31";
    }

    // Validar que el mes esté entre 1 y 12
    if (month < 1 || month > 12) {
      return "El mes debe estar entre 1 y 12";
    }

    // Validar que la fecha no sea en el futuro
    const today = new Date();
    const inputDate = new Date(year, month - 1, day);
    if (inputDate > today) {
      return "La fecha no puede ser en el futuro";
    }

    // Validar que la fecha sea válida
    if (
      inputDate.getDate() !== Number(day) ||
      inputDate.getMonth() + 1 !== Number(month) ||
      inputDate.getFullYear() !== Number(year)
    ) {
      return "La fecha ingresada no es válida";
    }

    return "";
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errorMessage = validateDate(day, month, year);
    if (errorMessage) {
      setError(errorMessage);
    } else {
      setError("");
      const calculateAge = (day, month, year) => {
        const birthDate = new Date(year, month - 1, day);
        const today = new Date();

        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();

        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          age--;
        }

        return age;
      };
    }

    return (
      <section className={styles.container}>
        <form
          className={styles.form}
          onSubmit={handleSubmit}
        >
          {/* Tus campos de entrada aquí */}
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
        {error && <div className={styles.errorMessage}>{error}</div>}
        {/* El resto de tu código de renderizado aquí */}
      </section>
    );
  };
}

// import React, { useState } from "react";
// import styles from "./age.module.css";
// import Image from "next/image";
// import src from "./images/icon-arrow.svg";
// import "./styles.css";

// export default function Home() {
//   const [day, setDay] = useState("");
//   const [month, setMonth] = useState("");
//   const [year, setYear] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Here you can handle the form submission, for example, calculate the age based on the input
//   };

//   return (
//     <section className={styles.container}>
//       <form
//         className={styles.form}
//         onSubmit={handleSubmit}
//       >
//         <label htmlFor="day">
//           Dia
//           <input
//             type="text"
//             id="day"
//             placeholder="DD"
//             required
//             value={day}
//             onChange={(e) => setDay(e.target.value)}
//           />
//           <p
//             className={styles.messageError}
//             id="messageError"
//           ></p>
//         </label>
//         <label htmlFor="month">
//           Mes
//           <input
//             type="text"
//             id="month"
//             placeholder="MM"
//             required
//             value={month}
//             onChange={(e) => setMonth(e.target.value)}
//           />
//           <p
//             className={styles.messageError}
//             id="messageError"
//           ></p>
//         </label>
//         <label htmlFor="year">
//           Año
//           <input
//             type="text"
//             id="year"
//             placeholder="YYYY"
//             required
//             value={year}
//             onChange={(e) => setYear(e.target.value)}
//           />
//           <p
//             className={styles.messageError}
//             id="messageError"
//           ></p>
//         </label>
//         <button
//           type="submit"
//           id="button"
//         >
//           <Image
//             src={src}
//             alt="Flecha hacia abajo que, al hacer clic, muestra la edad de la persona"
//             className={styles.iconArrow}
//           />
//         </button>
//       </form>
//       <div className={styles.containerData}>
//         <p className={styles.text}>
//           <span
//             className={styles.data}
//             id="years"
//           >
//             {year}
//           </span>
//           años
//         </p>
//         <p className={styles.text}>
//           <span
//             className={styles.data}
//             id="months"
//           >
//             {month}
//           </span>
//           meses
//         </p>
//         <p className={styles.text}>
//           <span
//             className={styles.data}
//             id="days"
//           >
//             {day}
//           </span>
//           dias
//         </p>
//         <div id="container-error"></div>
//       </div>
//     </section>
//   );
// }
