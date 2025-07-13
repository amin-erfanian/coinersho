"use client";

import FullScreenLoader from "@/components/general/full-screen-loading/FullScreenLoading";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const PROTECTED_ROUTES = ["/dashboard"];
const PUBLIC_ROUTES = ["/auth"];

export default function TokenChecker() {
  const router = useRouter();
  const pathname = usePathname();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    const isProtected = PROTECTED_ROUTES.some((r) => pathname.startsWith(r));
    const isPublic = PUBLIC_ROUTES.some((r) => pathname.startsWith(r));

    if (isProtected && !token) {
      router.replace("/auth");
    } else if (isPublic && token) {
      router.replace("/dashboard");
    } else {
      setChecking(false);
    }
  }, [router, pathname]);

  if (checking) return <FullScreenLoader />;
  return null;
}
