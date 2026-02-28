import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Cursos de Psicología con Certificado en 2026 | Adipa Chile",
  description: "Mira los mejores cursos de psicología para realizar en el 2026. Recibe certificado oficial al finalizar. ¡Conoce Adipa Chile!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className="antialiased flex flex-col min-h-screen"
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
