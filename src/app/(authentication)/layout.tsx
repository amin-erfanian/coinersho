import React from "react";
import type { ReactNode } from "react";
import TokenChecker from "./TokenChecker";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <TokenChecker />
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f7f7f7",
          padding: "1rem",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "400px",
            backgroundColor: "#fff",
            borderRadius: "16px",
            boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
            padding: "2rem",
          }}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
