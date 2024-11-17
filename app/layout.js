import "./globals.css";
import "./styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Footer from "./_components/Footer";

export const metadata = {
  title: "Imperial Hostel",
  description: "Imperial Hostel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
