import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://olimpiadekmitb.com"),
  title: "Olimpiade KM ITB XIII",
  description:
    "Ajang olahraga terbesar di ITB yang mempertemukan mahasiswa dalam semangat kompetisi, sportivitas, dan kebersamaan.",
  applicationName: "Olimpiade KM ITB XIII",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Olimpiade KM ITB XIII",
    description:
      "Bersiap untuk kompetisi olahraga terbesar di Institut Teknologi Bandung.",
    url: "/",
    siteName: "Olimpiade KM ITB XIII",
    locale: "id_ID",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000e58",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
