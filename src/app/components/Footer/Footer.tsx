import Image from "next/image";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <section className="left-section">
          <Image
            src="/trafalgar-footer.svg"
            width={159}
            height={41}
            alt="Trafalgar Logo"
          />
          <p className="description-footer">
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </p>
          <span className="copyright-footer">
            ©Trafalgar PTY LTD 2020. All rights reserved
          </span>
        </section>
        <section className="right-section">
          <ul className="footer-list">
            <li className="footer-title-list">Company</li>
            <li className="footer-list-item">About</li>
            <li className="footer-list-item">Testimonials</li>
            <li className="footer-list-item">Find a doctor</li>
            <li className="footer-list-item">Apps</li>
          </ul>
          <ul className="footer-list">
            <li className="footer-title-list">Region</li>
            <li className="footer-list-item">Indonesia</li>
            <li className="footer-list-item">Singapore</li>
            <li className="footer-list-item">Hongkong</li>
            <li className="footer-list-item">Canada</li>
          </ul>
          <ul className="footer-list">
            <li className="footer-title-list">Help</li>
            <li className="footer-list-item">Help Center</li>
            <li className="footer-list-item">Contact Support</li>
            <li className="footer-list-item">Instructions</li>
            <li className="footer-list-item">How it works</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
