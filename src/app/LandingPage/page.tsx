import HeaderPage from "../components/Header/HeaderPage";
import ServicesSection from "../components/Services/ServicesSection";
import SummarySection from "../components/SummarySection/SummarySection";
import ImageCarrossel from "../components/ImageCarrossel/ImageCarrossel";
import LatestArticles from "../components/LatestArticles/LatestArticles";
import Footer from "../components/Footer/Footer";
import "../components/ImageCarrossel/ImageCarrosselStyle.css";
import "../components/Header/HeaderStyle.css";
import "../components/Services/ServicesStyle.css";
import "../components/SummarySection/SummarySectionStyle.css";
import "../components/LatestArticles/LatestArticles.css";
import "../components/Footer/Footer.css";
export default function LandingPage() {
  return (
    <>
      <HeaderPage />
      <ServicesSection />
      <SummarySection />
      <ImageCarrossel />
      <LatestArticles />
      <Footer />
    </>
  );
}
