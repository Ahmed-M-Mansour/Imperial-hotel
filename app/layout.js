import "./globals.css";
import "./styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Contacts from "./_components/Contacts";
import Footer from "./_components/Footer";

export const metadata = {
  title: "Imerial Hostel",
  description: "Imerial Hostel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        {children}
        <Contacts />
        <Footer />
      </body>
    </html>
  );
}
