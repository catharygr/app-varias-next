import styles from "./destino.module.css";
import Image from "next/image";
import Logo from "@/app/pagina-destino-seguro/images/logo.svg";

export default function PaginaDestinoSeguro() {
  return (
    <div>
      <header className="header position-relative z-1">
        <section className="nav-bar container">
          <Image className={styles.logo} src={Logo} alt="logo" />
          <nav className="nav-menu" id="navMenu">
            <ul className="nav-lista">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Sobre nosotros
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Carreras
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Event0s
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Product0s
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Soporte
                </a>
              </li>
            </ul>

            <div className="cerrar-container">
              <img
                className="nav-cerrar"
                id="navClose"
                src="images/icon-close.svg"
                alt=""
              />
            </div>
          </nav>

          <div className="toggle-container">
            <img
              className="nav-toggle"
              id="navToggle"
              src="images/icon-hamburger.svg"
              alt=""
            />
          </div>
        </section>
        <div className="header-body container">
          <p className="header-text">Experiencias inmersivas que ofrecen</p>
        </div>
      </header>
    </div>
  );
}
