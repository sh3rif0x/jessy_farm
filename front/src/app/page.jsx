import Header from "./header/header";
import Home from "./home/page";
import Footer from "./footer/footer";
import Home2 from "./home2/page";

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <Header />
        <Home />
        <Home2 />
        <Footer />
        {children}
      </body>
    </html>
  );
}