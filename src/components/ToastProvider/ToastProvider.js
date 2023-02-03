import React, { createContext, useState } from "react";
import useEscapeKey from "../../hooks/use-escape-key";

export const ToastContext = createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  useEscapeKey(dismissAll);

  function popToast(toast) {
    if (!toast.message || !toast.variant) {
      throw new Error("Please provide Toast message & variant!");
    }
    setToasts([...toasts, { ...toast, id: crypto.randomUUID() }]);
  }

  function dismissToast(id) {
    setToasts(toasts.filter((toast) => toast.id !== id));
  }

  function dismissAll() {
    setToasts([]);
  }

  return (
    <ToastContext.Provider
      value={{ toasts, popToast, dismissToast, dismissAll }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
