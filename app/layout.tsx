import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Greenlands School Abuja | Excellence and Care",
  description:
    "Greenlands School Abuja is a private co-educational institution in Lokogoma offering crèche, nursery, primary, and lower secondary education in a serene and child-friendly environment.",
  keywords: [
    "Greenlands School Abuja",
    "private school in Abuja",
    "Lokogoma school",
    "nursery and primary school",
    "lower secondary school",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#fbfbf8] text-[#2a2a24]">
        {children}
      </body>
    </html>
  );
}
