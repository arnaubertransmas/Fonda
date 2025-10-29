import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fonda Safaja",
  description: "Restaurant a Sant Quirze de Safaja",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}