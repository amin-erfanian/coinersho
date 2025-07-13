"use client";

import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import BaseInput from "../input/BaseInput";
import styles from "./PasswordInput.module.scss";

interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  label?: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  value,
  onChange,
  name,
  label,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleVisibility = () => setShowPassword((prev) => !prev);

  return (
    <BaseInput
      name={name}
      label={label}
      type={showPassword ? "text" : "password"}
      value={value}
      onChange={onChange}
      append={
        <button
          type="button"
          onClick={toggleVisibility}
          className={styles.toggleIcon}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      }
      {...rest}
    />
  );
};

export default PasswordInput;
