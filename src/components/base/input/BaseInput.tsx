import React, {
  InputHTMLAttributes,
  ReactNode,
  useId,
  useState,
  useEffect,
} from "react";
import classNames from "classnames";
import styles from "./BaseInput.module.scss";

interface BaseInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  direction?: "ltr" | "rtl";
  variant?: "outlined" | "text";
  prepend?: ReactNode;
  append?: ReactNode;
}

const BaseInput: React.FC<BaseInputProps> = ({
  label = "",
  name,
  direction = "ltr",
  variant = "text",
  prepend,
  append,
  value,
  onChange,
  autoComplete = "off",
  ...rest
}) => {
  const inputId = useId();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(!!value);
  }, [value]);

  return (
    <div className={styles.field}>
      <div
        className={classNames(
          styles.field__content,
          styles[`field__content--${variant}`]
        )}
      >
        {prepend && <div className={styles.field__icon}>{prepend}</div>}

        <input
          className="field__input"
          name={name}
          dir={direction}
          autoComplete={autoComplete}
          {...rest}
          value={value}
          onChange={onChange}
        />

        {label && (
          <label
            htmlFor={inputId}
            className={classNames(styles.field__label, {
              [styles["field__label--has-active"]]: isActive,
            })}
          >
            {label}
          </label>
        )}

        {append && <div className={styles.field__icon}>{append}</div>}
      </div>
    </div>
  );
};

export default BaseInput;
