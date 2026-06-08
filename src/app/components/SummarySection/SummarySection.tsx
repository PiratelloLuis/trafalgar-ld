import Image from "next/image";
export default function SummarySection() {
  return (
    <div className="page-container">
      <section className="header-healthcare">
        <Image
          className="header-img"
          src="heatlhcare-img.svg"
          width={500}
          height={500}
          alt="Doctors image"
        />
        <section className="header-healthcare-text">
          <h2 className="section-title">Leading healthcare providers</h2>
          <div className="underline">_______</div>
          <p className="section-paragraph">
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone. To us, it’s not just
            work. We take pride in the solutions we deliver
          </p>
          <button className="section-button">Learn more</button>
        </section>
        <Image
          className="ImageDecoration"
          src="/decoration.svg"
          alt="Group of circles for decoration"
          width={115}
          height={115}
        />
      </section>
      <section className="download-section">
        <Image
          className="download-img"
          src="download-img.svg"
          width={500}
          height={500}
          alt="App image"
        />
        <section className="download-app-text">
          <h2 className="section-download-title">Download our mobile apps</h2>
          <div className="underline">_______</div>
          <p className="section-paragraph">
            Our dedicated patient engagement app and web portal allow you to
            access information instantaneously (no tedeous form, long calls, or
            administrative hassle) and securely
          </p>
          <button className="section-button">
            Download <span>&#x2193;</span>
          </button>
        </section>
      </section>
    </div>
  );
}
