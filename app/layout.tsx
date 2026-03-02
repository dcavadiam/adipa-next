import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Cursos de Psicología con Certificado en 2026 | Adipa Chile",
  description: "Mira los mejores cursos de psicología para realizar en el 2026. Recibe certificado oficial al finalizar. ¡Conoce Adipa Chile!",
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  openGraph: {
    url: "https://adipa.cl/cursos/",
    siteName: "ADIPA Chile",
    locale: "es_CL",
    type: "article",
    title: "Cursos de Psicología con Certificado en 2026 | Adipa Chile",
    description: "Mira los mejores cursos de psicología para realizar en el 2026. Recibe certificado oficial al finalizar. ¡Conoce Adipa Chile!",
    images: [
      {
        url: "https://adipa.cl/content/uploads/2025/01/cursos-banner-2025-2.webp",
        width: 992,
        height: 463,
        alt: "cursos banner 2025",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Cursos de Psicología con Certificado en 2026 | Adipa Chile",
    description: "Mira los mejores cursos de psicología para realizar en el 2026. Recibe certificado oficial al finalizar. ¡Conoce Adipa Chile!",
    images: ["https://adipa.cl/content/uploads/2025/01/cursos-banner-2025-2.webp"],
  },
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
