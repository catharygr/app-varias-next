import Image from "next/image";
import logo from "../image/logo.svg";
import icon from "../image/icon-cart.svg";
import styles from "./nav.module.css";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <Image src={logo} alt="Logo de la empresa" />
      </div>
      <Nav />
      <Image className={styles.icon} src={icon} alt="Icono de carrito" />
    </header>
  );
}
