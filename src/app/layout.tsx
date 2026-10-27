import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Parth Mahadik | Software Developer & Computer Engineering Student",
  description:
    "Personal portfolio of Parth Mahadik, Software Developer & Computer Engineering Student.",
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
