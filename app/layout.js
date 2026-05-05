import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Quem é Renan Santos? Biografia, MBL, Propostas e Partido Missão",
  description: "Renan Santos é ativista político, Presidente do partido Missão e pré candidato à presidência do Brasil.",
  openGraph: {
    title: "Quem é Renan Santos?",
    description: "Conheça mais sobre este escritor, compositor, ativista e ",
    images: ["/opengraph-image.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics/>
      </body>
    </html>
  );
}

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Renan Santos",
      "jobTitle": "Ativista político",
      "sameAs": [
        "https://x.com/RenanSantosMBL",
        "https://www.instagram.com/renansantosmbl"
      ]
    }),
  }}
/>
