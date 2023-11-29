import styles from "./Footer.module.css";
import Image from "next/image";
import logo from "../image/logo.svg";
import facebook from "../image/icon-facebook.svg";
import instagram from "../image/icon-instagram.svg";
import twitter from "../image/icon-twitter.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.logo}></div>
      </div>
    </footer>
  );
}
