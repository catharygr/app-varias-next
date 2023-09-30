import styles from "./PaginaPrincipal.module.css";
// import BgPatternMobile from "@/app/pagina-destino-seguro/images/bg-pattern-mobile-nav.svg";
import BgLeftMobile from "@/app/pagina-destino-seguro/images/bg-pattern-intro-left-mobile.svg";
import BgRightMobile from "@/app/pagina-destino-seguro/images/bg-pattern-intro-right-mobile.svg";
import BgLeftDesktop from "@/app/pagina-destino-seguro/images/bg-pattern-intro-left-desktop.svg";
import BgRightDesktop from "@/app/pagina-destino-seguro/images/bg-pattern-intro-right-desktop.svg";
import ImageIntroDesktop from "@/app/pagina-destino-seguro/images/image-intro-desktop.jpg";
import ImageIntroMobile from "@/app/pagina-destino-seguro/images/image-intro-mobile.jpg";

export default function PaginaPrincipal() {
  return (
    <section className={styles.mainContainer}>
      <div className={styles.content}>
        <div className={styles.mainText}>
          <div className={styles.border}></div>
          <h1 className={styles.h1}>Humanizando tu seguro.</h1>
          <p className={styles.p}>
            Obtén tu cobertura de seguro de vida de manera más fácil y rápida.
            Combinamos nuestra experiencia y tecnología para ayudarte a
            encontrar el plan que sea adecuado para ti. Asegúrate de que tú y
            tus seres queridos estén protegidos.
          </p>
          <button className={styles.button}>Ver planes</button>
          <Image src={BgLeftMobile} alt="#" className={styles.bgMobileLeft} />
          <Image src={BgRightMobile} alt="#" className={styles.bgMobileRight} />
        </div>

        <div className={styles.mainImage}>
          <Image
            src={ImageIntroDesktop}
            alt="#"
            className={styles.introDesktop}
          />
          <Image
            src={ImageIntroMobile}
            alt="#"
            className={styles.introMobile}
          />
        </div>
      </div>

      <Image src={BgLeftDesktop} alt="#" id={styles.bgLeftDesktop} />
      <Image src={BgRightDesktop} alt="#" id={styles.bgRightDesktop} />
    </section>
  );
}
