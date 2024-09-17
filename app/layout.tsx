import { Metadata } from 'next'
import localFont from "next/font/local";
import "./globals.css";

const geist = localFont({
  src: [
    {
      path: './fonts/GeistVF.woff',
      weight: '100 900',
      style: 'normal',
    },
  ],
  variable: '--font-geist',
});

const geistMono = localFont({
  src: [
    {
      path: './fonts/GeistMonoVF.woff',
      weight: '100 900',
      style: 'normal',
    },
  ],
  variable: '--font-geist-mono',
});

export const metadata: Metadata = {
  title: 'Pythtech Website',
  description: 'Your website description here',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body className={geist.className}>{children}</body>
    </html>
  );
}
