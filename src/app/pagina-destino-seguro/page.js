export default function PaginaDestinoSeguro() {
  return (
    <div>
      <header className="header position-relative z-1">
        <section className="nav-bar container">
          <img className="logo" src="images/logo.svg" alt="" />
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
          <p className="header-text">Immersive experiences that deliver</p>
        </div>
      </header>
    </div>
  );
}
