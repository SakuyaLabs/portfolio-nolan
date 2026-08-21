import type { Metadata } from "next";
import { Space_Grotesk, Noto_Sans_JP } from "next/font/google";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk-google",
  weight: ["500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nolan.sakuyalabs.com"),
  alternates: { canonical: "/" },
  title: {
    default: "Nolan | エンジニア採用",
    template: "%s | Nolan",
  },
  description:
    "SaaSスタートアップNolanの採用サイト。裁量とカルチャーフィットを大切にするエンジニア組織で、一緒に働きませんか。",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Nolan",
    description: "裁量とカルチャーフィットを大切にするエンジニア組織。",
    siteName: "Nolan",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nolan",
    description: "裁量とカルチャーフィットを大切にするエンジニア組織。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ja"
      className={`${spaceGrotesk.variable} ${notoSansJP.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-paper">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
