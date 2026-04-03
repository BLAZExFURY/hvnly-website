import type { Metadata } from "next";
import { Inter, UnifrakturMaguntia } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./providers/CartProvider";
import { Navbar } from "./components/Navbar";
import { CartDrawer } from "./components/CartDrawer";
import { SmoothScroll } from "./components/SmoothScroll";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const unifraktur = UnifrakturMaguntia({ 
  weight: "400", 
  subsets: ["latin"],
  variable: "--font-unifraktur"
});

export const metadata: Metadata = {
  title: "HVNLY",
  description: "Quiet luxury — where Heaven meets streetwear.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${unifraktur.variable} h-full antialiased font-sans`}
    >
      <body className="min-h-full flex flex-col bg-white text-black selection:bg-black selection:text-white">
        <SmoothScroll />
        <CartProvider>
          <Navbar />
          <CartDrawer />
          <main className="flex-grow flex flex-col">
            {children}
          </main>
        </CartProvider>
      </body>
    </html>
  );
}
