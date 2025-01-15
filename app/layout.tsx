import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "یک برنامه",
  description: "توضیحات یک برنامه",
};

interface RootLayoutType {
  children: React.ReactNode
}

export default function RootLayout({children}: Readonly<RootLayoutType>) {
  return (
    <html dir="rtl" lang="fa">
      <body>
        {children}
      </body>
    </html>
  );
}
