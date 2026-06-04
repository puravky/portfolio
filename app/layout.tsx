import type { Metadata } from "next";
import "./globals.css";
import { Ubuntu, Source_Code_Pro } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Analytics } from "@vercel/analytics/next"

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-ubuntu",
});

const sourceCode = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-source-code-pro",
});

export const metadata: Metadata = {
  title: "Purav Kumar | Portfolio",
  description: "Portfolio of Purav Kumar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ubuntu.variable} ${sourceCode.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-black text-white">
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
