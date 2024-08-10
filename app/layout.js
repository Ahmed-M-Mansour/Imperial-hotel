import "./globals.css";
import "./styles.css";

export const metadata = {
  title: "Imerial Hostel",
  description: "Imerial Hostel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
