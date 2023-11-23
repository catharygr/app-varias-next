import styles from "./SeccionDos.module.css";
import Image from "next/image";
import online from "../images/icon-online.svg";
import budgeting from "../images/icon-budgeting.svg";
import onboarding from "../images/icon-onboarding.svg";
import api from "../images/icon-api.svg";

function SeccionDos() {
  return (
    <div className={styles.container}>
      <h1 className={styles.titles}>Why choose Easybank?</h1>

      <p className={styles.paragraph}>
        We leverage Open Banking to turn your bank account into your financial
        hub. Control your finances like never before.
      </p>

      <div className={styles.container_1}>
        <div className={styles.card}>
          <Image
            src={online}
            className={styles.imgs}
          />
          <h2 className={styles.subtitle}>Online Banking</h2>

          <p className={styles.paragraph}>
            Our modern web and mobile applications allow you to keep track of
            your finances wherever you are in the world.
          </p>
        </div>

        <div className={styles.card}>
          <Image
            src={budgeting}
            className={styles.imgs}
          />

          <h2 className={styles.subtitle}>Simple Budgeting</h2>

          <p className={styles.paragraph}>
            See exactly where your money goes each month. Receive notifications
            when you’re close to hitting your limits.
          </p>
        </div>

        <div className={styles.card}>
          <Image
            src={onboarding}
            className={styles.imgs}
          />
          <h2 className={styles.subtitle}>Fast Onboarding</h2>

          <p className={styles.paragraph}>
            We don’t do branches. Open your account in minutes online and start
            taking control of your finances right away.
          </p>
        </div>

        <div className={styles.card}>
          <Image
            src={api}
            className={styles.imgs}
          />

          <h2 className={styles.subtitle}>Open API</h2>

          <p className={styles.paragraph}>
            Manage your savings, investments, pension, and much more from one
            account. Tracking your money has never been easier.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SeccionDos;
