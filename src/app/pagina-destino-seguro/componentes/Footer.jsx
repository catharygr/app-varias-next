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
        <div className={styles.logo}>
          <Image
            src={logo}
            alt="logo"
          />
        </div>
        <div className={styles.social}>
          <Link href="https://www.facebook.com/">
            <Image
              src={facebook}
              alt="facebook"
            />
          </Link>
          <Link href="https://www.twitter.com/">
            <Image
              src={twitter}
              alt="twitter"
            />
          </Link>
          <Link href="https://www.instagram.com/">
            <Image
              src={instagram}
              alt="instagram"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
