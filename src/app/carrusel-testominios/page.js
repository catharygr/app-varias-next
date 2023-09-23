import styles from "./carrusel.module.css";

export default function Carrusel() {
  return (
    <div className={styles.container}>
      <div className={styles.carruselIzq}>
        <p>
          {" "}
          I amve been interested in coding for a while but never taken the jump,
          until now. I could not recommend this course enough. I am now in the
          job of my dreams and so excited about the future.{" "}
        </p>
      </div>
      <div className={styles.carruselDer}>
        <p>
          {" "}
          I amve been interested in coding for a while but never taken the jump,
          until now. I could not recommend this course enough. I am now in the
          job of my dreams and so excited about the future.{" "}
        </p>
      </div>
    </div>
  );
}
