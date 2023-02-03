import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

const VARIANTS = Object.keys(ICONS_BY_VARIANT);

function Toast({ onDismiss, variant, children }) {
  if (!VARIANTS.includes(variant)) {
    throw new Error("Provided variant is not supported!");
  }

  const Icon = ICONS_BY_VARIANT[variant];

  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>
        <VisuallyHidden>{variant} - </VisuallyHidden>
        {children}
      </p>
      <button className={styles.closeButton}>
        <X
          size={24}
          onClick={onDismiss}
          aria-label="Dismiss message"
          aria-live="off"
        />
      </button>
    </div>
  );
}

export default Toast;
