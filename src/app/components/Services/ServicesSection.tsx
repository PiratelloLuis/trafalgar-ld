import ServicesCard from "../ServicesCards/ServicesCards";
import bg from "../../../../public/cloud.svg";
import Image from "next/image";

import "../ServicesCards/ServicesCards.css";
export default function ServicesSection() {
  return (
    <div
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundPosition: `left`,
        backgroundRepeat: `no-repeat`,
      }}
    >
      <div className="PageContainer">
        <section className="ServicesSection">
          <section className="ServicesText">
            <h2 className="SectionTextTitle">Our Services</h2>
            <div className="services-underline">________</div>
            <p className="ServicesParagraph">
              We provide to you the best choiches for you. Adjust it to your
              health needs and make sure your undergo treatment with our highly
              qualified doctors you can consult with us which type of service is
              suitable for your health
            </p>
          </section>
          <section className="CardSection">
            <ServicesCard
              icon="/searchdoctor.svg"
              title="Search doctor"
              desc="Choose your doctor from thousands of specialist, general, and trusted hospitals"
            />
            <ServicesCard
              icon="/medicine.svg"
              title="Online pharmacy"
              desc="Buy  your medicines with our mobile application with a simple delivery system"
            />
            <ServicesCard
              icon="/consult.svg"
              title="Consultation"
              desc="Free consultation with our trusted doctors and get the best recomendations"
            />
            <ServicesCard
              icon="/details.svg"
              title="Details info"
              desc="Free consultation with our trusted doctors and get the best recomendations"
            />
            <ServicesCard
              icon="/medkit.svg"
              title="Emergency care"
              desc="You can get 24/7 urgent care for yourself or your children and your
lovely family"
            />
            <ServicesCard
              icon="/clipboard.svg"
              title="Tracking"
              desc="Track and save your medical history and health data "
            />
          </section>
          <Image
            className="ServicesDecoration"
            src="/servicedecoration.svg"
            width={130}
            height={115}
            alt="Bubbles"
          />
          <button className="ServiceButtons">Learn more</button>
        </section>
      </div>
    </div>
  );
}
