import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FloWeather",
  description:
    "Pagina para realizar cuentas para climatizar hospedajes en tu ciudad",
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        <main className=" my-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
