import "./globals.css";
import Warnings from "./components/warnings";
import { assistantId } from "./assistant-config";
import type { Metadata } from "next";
import { Crimson_Text } from "next/font/google";
import { LanguageProvider } from "./contexts/LanguageContext";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Chat from "./components/chat";

const crimsonText = Crimson_Text({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elagri Farm",
  description: "Fresh and quality fruits directly from our farm. We offer a variety of agricultural products, grown sustainably. Enjoy the freshness and taste of nature.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" 
        />
      </head>
      <body className={`${crimsonText.className} antialiased`}>
        {assistantId ? (
          <LanguageProvider>
            <Navbar />
            {children}
            <Footer />
            <Chat />
          </LanguageProvider>
        ) : (
          <Warnings />
        )}
      </body>
    </html>
  );
}
