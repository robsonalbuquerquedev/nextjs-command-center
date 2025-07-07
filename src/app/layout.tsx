// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import ClientWrapper from "./ClientWrapper";

export const metadata: Metadata = {
  title: "Next.js Command Center – Robson Albuquerque",
  description: "Um painel interativo com os recursos, componentes e práticas mais essenciais para projetos Next.js modernos. Criado por Robson Albuquerque para estudos e reuso profissional.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
