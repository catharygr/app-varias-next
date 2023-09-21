import React from "react";
import { X as Close } from "react-feather";
import FocusLock from "react-focus-lock";
import { RemoveScroll } from "react-remove-scroll";
import styles from "./Drawer.module.css";

function Drawer({ handleDismiss, children }) {
  React.useEffect(() => {
    const elementoEnfocado = document.activeElement;
    return () => {
      elementoEnfocado?.focus();
    };
  }, []);

  React.useEffect(() => {
    function handleEscape(e) {
      if (e.code === "Escape") {
        handleDismiss();
      }
    }

    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  });

  return (
    <div className={styles.wrapper}>
      <div onClick={handleDismiss} className={styles.backdrop} />
      <FocusLock>
        <RemoveScroll>
          <div className={styles.drawer}>
            <div>{children}</div>
            <button className={styles.closeBtn} onClick={handleDismiss}>
              <Close size={18} /> Dismiss
            </button>
          </div>
        </RemoveScroll>
      </FocusLock>
    </div>
  );
}

export default Drawer;
