import HeaderPage from "../components/Header/HeaderPage";
import ServicesSection from "../components/Services/ServicesSection";
import "../components/Header/HeaderStyle.css";
import "../components/Services/ServicesStyle.css";

import "../global.css";
export default function LandingPage() {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Trafalgar</title>
      </head>
      <body>
        <HeaderPage />
        <ServicesSection />
      </body>
    </html>
  );
}
