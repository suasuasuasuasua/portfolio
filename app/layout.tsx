import Footer from "@/app/ui/footer";
import Header from "@/app/ui/header";
import "@/styles/globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "sua's personal website",
  description: "come see what i've been working on :)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased
        min-h-screen flex flex-col pb-1`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
