import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";

import { GoogleAnalytics } from "@next/third-parties/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { raleway } from "./fonts";
import Header from "../components/Header";
import Footer from "@/components/Footer";
config.autoAddCss = false;

export const metadata = {
  title: "Gina González Gut | Frontend Developer",
  description:
    "I'm Gina, a frontend developer. I create clean and functional UX/UI interfaces with well-structured code and attention to detail.",
  alternates: {
    canonical: "https://ginagonzalezgut.com",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Gina González Gut | Frontend Developer",
    description:
      "I'm Gina, a frontend developer. I create clean and functional UX/UI interfaces with well-structured code and attention to detail.",
    url: "https://ginagonzalezgut.com",
    siteName: "Gina González Gut",
    locale: "en_US",
    images: [
      {
        url: "https://ginagonzalezgut.com/website-image.jpg",
        width: 600,
        height: 350,
        alt: "Gina González Website",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Header />
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-RPHFD182NY" />
    </html>
  );
}
