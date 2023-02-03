import React, { useImperativeHandle, useState } from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf(props, ref) {
  const [toasts, setToasts] = useState([]);

  useImperativeHandle(ref, () => {
    return {
      popToast(toast) {
        if (!toast.message || !toast.variant) {
          throw new Error("Please provide Toast message & variant!");
        }
        setToasts([...toasts, { ...toast, id: crypto.randomUUID() }]);
      },
    };
  });

  function dismissToast(id) {
    setToasts(toasts.filter((toast) => toast.id !== id));
  }

  return (
    <>
      {toasts.length > 0 && (
        <ol className={styles.wrapper}>
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

export default React.forwardRef(ToastShelf);
