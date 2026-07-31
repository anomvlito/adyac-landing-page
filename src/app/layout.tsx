import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://adyac.cl"),
  title: "Adyac — Producto, diseño y tecnología",
  description:
    "Diseñamos y construimos productos digitales para equipos que resuelven problemas complejos en salud, investigación y operación.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Adyac — Producto, diseño y tecnología",
    description:
      "Del problema a una solución digital que funciona, se puede medir y está preparada para evolucionar.",
    url: "https://adyac.cl",
    siteName: "Adyac",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adyac — Producto, diseño y tecnología",
    description:
      "Construimos tecnología que mueve el trabajo real.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${geist.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
