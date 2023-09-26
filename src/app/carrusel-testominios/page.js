"use client";
import styles from "./carrusel.module.css";
import React, { useState } from "react";
import Image from "next/image";
import bg from "@/app/carrusel-testominios/images/pattern-bg.svg";
import tanya from "@/app/carrusel-testominios/images/image-tanya.jpg";
import quotes from "@/app/carrusel-testominios/images/pattern-quotes.svg";
import curve from "@/app/carrusel-testominios/images/pattern-curve.svg";
import john from "@/app/carrusel-testominios/images/image-john.jpg";
import { ChevronLeft, ChevronRight } from "react-feather";

export default function Carrusel() {
  const [personaActual, setPersonaActual] = useState(0);

  const personas = [
    {
      nombre: "Tanya Sinclair",
      profesion: "UX Engineer",
      testimonio:
        "I have been interested in coding for a while but never taken the jump, until now. I could not recommend this course enough. I am now in the job of my dreams and so excited about the future.",
      imagen: tanya,
    },
    {
      nombre: "John Tarkpor",
      profesion: "Front-end Developer",
      testimonio:
        "This is the best coding course I have ever taken. The instructors are knowledgeable, and the hands-on projects helped me gain practical experience.",
      imagen: john,
    },
  ];

  const cambiarPersona = (direccion) => {
    if (direccion === "anterior") {
      setPersonaActual((prevState) =>
        prevState === 0 ? personas.length - 1 : prevState - 1
      );
    } else {
      setPersonaActual((prevState) =>
        prevState === personas.length - 1 ? 0 : prevState + 1
      );
    }
  };

  const persona = personas[personaActual];

  const miestilo = {
    backgroundImage: `url(${curve.src})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom left",
  };

  return <div style={miestilo} className={styles.container}></div>;
}
