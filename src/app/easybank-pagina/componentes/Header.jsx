import style from "./easybank.module.css";
import Image from "next/image";
import Logo from "./images/logo.svg";
import ButtonMenuMobile from "../assets/images/buttonMenuMobile.svg";
import ButtonCloseMenuMobile from "../assets/images/icon-close.svg";
import NavegacionMobiles from "./NavegacionMobiles";
import useState from "react";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <header className={style.container}>
        <Image
          src={Logo}
          alt="logo"
          className={style.logo}
        />
        <ul className={style.list_desktop}>
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
        <button className={style.button_desktop}>Request Invite</button>
        <img
          src={openMenu ? ButtonCloseMenuMobile : ButtonMenuMobile}
          className={
            openMenu ? style.buttonMenuMobileClose : style.buttonMenuMobile
          }
          onClick={() => setOpenMenu(!openMenu)}
        />
      </header>
      {openMenu && <NavegacionMobiles />}
    </>
  );
}

export default Header;
