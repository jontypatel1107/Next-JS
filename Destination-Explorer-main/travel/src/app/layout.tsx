
import type { Metadata } from "next";
import "./globals.css";
import "../components/Navbar.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Wanderly | Travel Destination Explorer",
  description:
    "Discover beautiful destinations, plan your next trip, and explore the world with Wanderly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
