import Logo from "../Icons/Logo";
import FooterNav from "./FooterNav/FooterNav";
import Socials from "./Socials/Socails";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">
        <a href="#" className="footer-logo-link">
          <Logo />
        </a>
      </div>
      <FooterNav />
      <Socials />
    </footer>
  );
};

export default Footer;
