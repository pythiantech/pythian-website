import { Metadata } from 'next'
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  src: [
    {
      path: '../public/fonts/Inter-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Inter-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Inter-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
  ],
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
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
