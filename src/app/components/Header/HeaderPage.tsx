import HeaderLogo from "../HeaderLogo/HeaderLogo";
import Image from "next/image";
function HeaderPage() {
  return (
    <div>
      <div className="PageContainer">
        <section className="HeaderSection">
          <header className="Header">
            <ul className="Navbar">
              <HeaderLogo></HeaderLogo>

              <li className="NavbarItem">
                <a className="ListItem" href="#home">
                  About Us
                </a>
              </li>
              <li className="NavbarItem">
                <a className="ListItem" href="#news">
                  Testimonails
                </a>
              </li>
              <li className="NavbarItem">
                <a className="ListItem" href="#contact">
                  Apps
                </a>
              </li>
              <li className="NavbarItem">
                <a className="ListItem" href="#about">
                  Find a Doctor
                </a>
              </li>
              <li className="NavbarItem">
                <a className="ListItem" href="/LandingPage">
                  Home
                </a>
              </li>
            </ul>
          </header>
        </section>
        <Image
          className="ImageDecoration"
          src="/decoration.svg"
          alt="Group of circles for decoration"
          width={115}
          height={115}
        />
        <section className="Banner">
          <summary className="HeaderText">
            <h2 className="HeaderTitle">Virtual healthcare for you</h2>
            <p className="HeaderSubTitle">
              Trafalgar provides progressive, and affordable healthcare,
              accessible on mobile and online for everyone
            </p>
            <button className="HeaderTextButton">Consult today</button>
          </summary>
          <div className="ImageContainer">
            <Image
              className="BannerImage"
              src="/BannerImage.svg"
              alt="Doctors drawing"
              width={693}
              height={550}
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default HeaderPage;
