import React, { createContext, useState } from "react";

export const ToastContext = createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  function popToast(toast) {
    if (!toast.message || !toast.variant) {
      throw new Error("Please provide Toast message & variant!");
    }
    setToasts([...toasts, { ...toast, id: crypto.randomUUID() }]);
  }

  function dismissToast(id) {
    setToasts(toasts.filter((toast) => toast.id !== id));
  }

  return (
    <ToastContext.Provider value={{ toasts, popToast, dismissToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
