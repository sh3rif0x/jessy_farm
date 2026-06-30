import Header from "./header/header";
import Home from "./home/page";
import Footer from "./footer/footer";
import Home2 from "./home2/page";

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <Home />
        <Home2 />
        {children}
      </body>
    </html>
  );
}