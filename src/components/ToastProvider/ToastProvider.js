import React, { createContext, useState, useEffect } from "react";

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

  function dismissAll() {
    setToasts([]);
  }

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") dismissAll();
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <ToastContext.Provider
      value={{ toasts, popToast, dismissToast, dismissAll }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
