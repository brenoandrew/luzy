import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Luzy Cooper | Gamer Profile",
  description: "A cyber-purple gamer and social profile built with Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
