import styles from "./SeccionUna.module.css";
import Image from "next/image";
import mockups from "../images/image-mockups.png";

function SeccionUna() {
  return (
    <div className={styles.container}>
      <div className={styles.container_1}></div>

      <div className={styles.container_2}>
        <h1 className={styles.title}>Next generation digital banking</h1>
        <p className={styles.paragraph}>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more
        </p>
        <button className={styles.button}>Request Invite</button>
      </div>
    </div>
  );
}

export default SeccionUna;
