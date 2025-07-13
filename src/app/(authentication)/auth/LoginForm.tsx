"use client";

import axios from "axios";
import { formSchema } from "@/schema/formSchema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { useRouter } from "next/navigation";
import { useState } from "react";

import BaseButton from "@/components/base/button/BaseButton";
import BaseInput from "@/components/base/input/BaseInput";
import BasePasswordInput from "@/components/base/password-input/BasePasswordInput";

import styles from "./LoginForm.module.scss";

interface LoginResponse {
  token: string;
}

type LoginFormData = z.infer<typeof formSchema>;

const LoginForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(formSchema),
  });
  const [error, setError] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    setSubmitting(true);
    try {
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve("delayed");
        }, 2000)
      );
      const response = await axios.post<LoginResponse>("/api/auth", data);
      const { token } = response.data;
      localStorage.setItem("token", token);
      router.push("/dashboard");
    } catch (error) {
      setSubmitting(false);
      setError("An unexpected error occurred.");
    }
  });

  if (error) return <> TODO: Toast show the error </>;

  return (
    <div className={styles["login-form"]}>
      <form onSubmit={onSubmit}>
        <div className={styles["login-form__field"]}>
          <BaseInput
            variant="outlined"
            placeholder="phone"
            {...register("phone")}
          />
          {errors.phone && (
            <p className={styles["login-form__error"]}>
              {errors.phone.message}
            </p>
          )}
        </div>

        <div className={styles["login-form__field"]}>
          <BasePasswordInput
            variant="outlined"
            placeholder="password"
            {...register("password")}
          />
          {errors.password && (
            <p className={styles["login-form__error"]}>
              {errors.password.message}
            </p>
          )}
        </div>

        <div className={styles["login-form__button"]}>
          <BaseButton
            type="submit"
            size="small"
            isLoading={isSubmitting}
            disabled={isSubmitting}
            block
          >
            Submit
          </BaseButton>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
