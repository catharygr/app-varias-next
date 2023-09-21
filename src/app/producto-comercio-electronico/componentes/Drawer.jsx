"use client";
import React from "react";
import { X as Close } from "react-feather";
import FocusLock from "react-focus-lock";
import { RemoveScroll } from "react-remove-scroll";
import styles from "./Drawer.module.css";

function Drawer({ handleDismiss, children }) {
  useEscapeKey(handleDismiss);

  return (
    <FocusLock returnFocus={true}>
      <RemoveScroll>
        <div className={styles.wrapper}>
          <div className={styles.backdrop} onClick={handleDismiss} />
          <div className={styles.drawer}>
            <div>{children}</div>
            <button className={styles.closeBtn} onClick={handleDismiss}>
              <Close size={18} aria-hidden="true" focusable="false" /> Dismiss
            </button>
          </div>
        </div>
      </RemoveScroll>
    </FocusLock>
  );
}

function useEscapeKey(callback) {
  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === "Escape") {
        callback();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [callback]);
}

export default Drawer;
