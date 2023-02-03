import { useEffect } from "react";

const useEscapeKey = (handler) => {
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") handler();
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handler]);
};

export default useEscapeKey;
