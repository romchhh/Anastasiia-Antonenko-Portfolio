import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
});

export const metadata: Metadata = {
  title: "Anastasiia Antonenko - Photographer & Visual Artist",
  description: "Portfolio of Anastasiia Antonenko, a Ukrainian photographer and visual artist. Explore contemporary photography, documentary work, and artistic projects that capture the essence of human experience and social reality.",
  keywords: [
    "Anastasiia Antonenko",
    "photographer",
    "visual artist",
    "Ukrainian photographer",
    "contemporary photography",
    "documentary photography",
    "art portfolio",
    "photography portfolio",
    "visual arts",
    "fine art photography",
    "social documentary",
    "artistic photography"
  ],
  authors: [{ name: "Anastasiia Antonenko" }],
  creator: "Anastasiia Antonenko",
  publisher: "Anastasiia Antonenko",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://antonenko.net'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Anastasiia Antonenko - Photographer & Visual Artist",
    description: "Portfolio of Anastasiia Antonenko, a Ukrainian photographer and visual artist. Explore contemporary photography, documentary work, and artistic projects that capture the essence of human experience and social reality.",
    url: 'https://antonenko.net',
    siteName: 'Anastasiia Antonenko Portfolio',
    images: [
      {
        url: '/gallery/Frame 458.png',
        width: 1200,
        height: 630,
        alt: 'Anastasiia Antonenko Photography Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Anastasiia Antonenko - Photographer & Visual Artist",
    description: "Portfolio of Anastasiia Antonenko, a Ukrainian photographer and visual artist. Explore contemporary photography, documentary work, and artistic projects.",
    images: ['/gallery/Frame 458.png'],
    creator: '@stusha_film',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.png?v=2',
    shortcut: '/favicon.png?v=2',
    apple: '/favicon.png?v=2',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png?v=2" type="image/png" />
        <link rel="shortcut icon" href="/favicon.png?v=2" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png?v=2" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png?v=2" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png?v=2" />
      </head>
      <body
        className={`${workSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
