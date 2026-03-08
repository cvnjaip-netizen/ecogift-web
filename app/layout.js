import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "EcoGift Chile | Regalos corporativos y promocionales",
  description: "Regalos corporativos, productos promocionales y soluciones personalizadas para eventos, campañas y kits empresariales."
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
