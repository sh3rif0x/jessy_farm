import Header from "./header/header";
import Footer from "./footer/footer";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}