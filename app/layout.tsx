import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MovOS",
  description: "Fleet operations system",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
