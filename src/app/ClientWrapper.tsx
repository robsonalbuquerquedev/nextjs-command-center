// app/ClientWrapper.tsx
"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const previousPath = useRef<string | null>(null);

    useEffect(() => {
        const alreadyShown = sessionStorage.getItem("welcomeToastShown");

        if (!alreadyShown && pathname === "/") {
            toast.success("Bem-vindo ao seu painel Next.js Command Center! 🚀");
            sessionStorage.setItem("welcomeToastShown", "true");
        }

        if (previousPath.current === "/" && pathname !== "/") {
            toast("Volte sempre, Robson! 👋");
        }

        previousPath.current = pathname;
    }, [pathname]);

    return (
        <>
            <Toaster />
            {children}
        </>
    );
}
