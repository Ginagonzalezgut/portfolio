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
  title: "Gina González",
  description: "Soy Gina González, Front end developer",
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
