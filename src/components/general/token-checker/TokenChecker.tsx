"use client";

import FullScreenLoader from "@/components/general/full-screen-loading/FullScreenLoading";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function TokenChecker({
  redirectPath,
}: {
  redirectPath: string;
}) {
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.replace(redirectPath);
    } else {
      setChecking(false);
    }
  }, [router, redirectPath]);

  if (checking) return <FullScreenLoader />;
  return null;
}
