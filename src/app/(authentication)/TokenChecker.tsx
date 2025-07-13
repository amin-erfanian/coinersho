"use client";

import FullScreenLoader from "@/components/general/full-screen-loading/FullScreenLoading";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function TokenChecker() {
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.replace("/dashboard");
    } else {
      setChecking(false);
    }
  }, [router]);

  if (checking) return <FullScreenLoader />;
  return null;
}
