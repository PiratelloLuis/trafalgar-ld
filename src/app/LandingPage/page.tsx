import HeaderPage from "../components/Header/HeaderPage";
import ServicesSection from "../components/Services/ServicesSection";
import SummarySection from "../components/SummarySection/SummarySection";
import ImageCarrossel from "../components/ImageCarrossel/ImageCarrossel";
import LatestArticles from "../components/LatestArticles/LatestArticles";
import "../components/Header/HeaderStyle.css";
import "../components/Services/ServicesStyle.css";
import "../components/SummarySection/SummarySectionStyle.css";
import "../components/ImageCarrossel/ImageCarrosselStyle.css";
import "../components/LatestArticles/LatestArticles.css";
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
        <SummarySection />
        <ImageCarrossel />
        <LatestArticles />
      </body>
    </html>
  );
}
