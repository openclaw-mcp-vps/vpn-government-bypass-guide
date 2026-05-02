import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VPN Bypass Guide — Curated Tools for Restricted Regions",
  description:
    "Regularly updated database of working VPN alternatives and circumvention tools organized by country and region. Stay connected despite censorship."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          src="https://umami.microtool.dev/script.js"
          data-website-id="79bcecfe-b294-4f34-ad83-2a1f0ace41e9"
        />
      </head>
      <body className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
