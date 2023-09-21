import Image from "next/image";
import logo from "../image/logo.svg";
import icon from "../image/icon-cart.svg";
import styles from "./nav.module.css";
import Nav from "./Nav";
import { Menu } from "react-feather";

export default function Header() {
  return (
    <header className={styles.container}>
      <div>
        <button>
          <Menu className={styles.hamburgerBtn} />
        </button>
      </div>
      <div className={styles.logo}>
        <Image src={logo} alt="Logo de la empresa" />
      </div>
      <Nav />
      <Image className={styles.icon} src={icon} alt="Icono de carrito" />
    </header>
  );
}
