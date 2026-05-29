import HeaderLogo from "../HeaderLogo/HeaderLogo";
function HeaderPage() {
  return (
    <div>
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
    </div>
  );
}

export default HeaderPage;
