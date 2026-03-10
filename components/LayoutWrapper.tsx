'use client'

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import PaulNavbar from "@/components/PaulNavbar";
import PaulFooter from "@/components/PaulFooter";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isAdminRoute, setIsAdminRoute] = useState(false);

  useEffect(() => {
    setIsAdminRoute(pathname.startsWith("/admin"));
  }, [pathname]);

  return (
    <>
      {!isAdminRoute && <PaulNavbar />}
      <main className={`flex-grow ${!isAdminRoute ? "mt-20" : ""}`}>
        {children}
      </main>
      {!isAdminRoute && <PaulFooter />}
    </>
  );
}
