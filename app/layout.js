import "./globals.css";
import "./styles.css";
import Contacts from "./_components/Contacts";
import Footer from "./_components/Footer";

export const metadata = {
  title: "Imerial Hostel",
  description: "Imerial Hostel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Contacts />
      <Footer />
    </html>
  );
}
