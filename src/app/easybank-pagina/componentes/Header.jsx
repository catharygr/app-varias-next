"use client";
import styles from "./Header.module.css";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <header className={styles.container}>
        <Image
          src={Logo}
          alt="logo"
          className={styles.logo}
          priority={true}
        />
        <ul className={styles.list_desktop}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
        </ul>
        <button className={styles.button_desktop}>Request Invite</button>
        <Image
          src={openMenu ? ButtonCloseMenuMobile : ButtonMenuMobile}
          alt="buttonMenuMobile"
          className={
            openMenu ? styles.buttonMenuMobileClose : styles.buttonMenuMobile
          }
          onClick={() => setOpenMenu(!openMenu)}
        />
      </header>
      {openMenu && <NavegacionMobiles />}
    </>
  );
}

export default Header;
