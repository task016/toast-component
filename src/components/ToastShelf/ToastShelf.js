import React, { useContext } from "react";
import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider/ToastProvider";

function ToastShelf() {
  const { toasts, dismissToast } = useContext(ToastContext);
  return (
    <>
      {toasts.length > 0 && (
        <ol
          className={styles.wrapper}
          role="region"
          aria-live="assertive"
          aria-label="notification"
        >
          {toasts.map((toast) => (
            <li key={toast.id} className={styles.toastWrapper}>
              <Toast
                onDismiss={() => {
                  dismissToast(toast.id);
                }}
                variant={toast.variant}
              >
                {toast.message}
              </Toast>
            </li>
          ))}
        </ol>
      )}
    </>
  );
}

export default ToastShelf;
