import React from "react";
import classNames from "classnames";
import styles from "./BaseButton.module.scss";
import Spinner from "@/components/general/spinner/Spinner";

type Variant = "filled" | "success-filled" | "text";
type Size = "small" | "medium" | "large";

interface BaseButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  labelText?: string;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  variant?: Variant;
  size?: Size;
  block?: boolean;
  isLoading?: boolean;
}

const BaseButton: React.FC<BaseButtonProps> = ({
  labelText,
  leadingIcon,
  trailingIcon,
  variant = "filled",
  size = "medium",
  block = false,
  isLoading = false,
  disabled = false,
  children,
  ...rest
}) => {
  const buttonClass = classNames(
    styles.button,
    styles[`button_variant_${variant}`],
    styles[`button_size_${size}`],
    {
      [styles.button_block]: block,
    }
  );

  return (
    <button className={buttonClass} disabled={disabled || isLoading} {...rest}>
      {leadingIcon && (
        <span className={styles.button__leading_icon}>{leadingIcon}</span>
      )}
      {isLoading ? (
        <span className={styles.button__loader}>
          <Spinner />
        </span>
      ) : (
        <span className={styles.button__label}>{children || labelText}</span>
      )}
      {trailingIcon && (
        <span className={styles.button__trailing_icon}>{trailingIcon}</span>
      )}
    </button>
  );
};

export default BaseButton;
