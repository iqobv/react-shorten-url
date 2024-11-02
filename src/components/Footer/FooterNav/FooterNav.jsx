import { LINKS } from "./../../../constants/links";

import "./FooterNav.scss";

const FooterNav = () => {
  return (
    <nav className="footer-nav">
      <ul className="footer-nav-list">
        {LINKS.map((link, index) => (
          <li key={index} className="footer-nav-list-item">
            <a href="#" className="footer-nav-list-item-title">
              {link.title}
            </a>
            <ul className="footer-nav-list-item-sublinks">
              {link.subLinks.map((sublink, index) => (
                <li key={index} className="footer-nav-list-item-sublinks-item">
                  <a
                    href="#"
                    className="footer-nav-list-item-sublinks-item-link"
                  >
                    {sublink}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FooterNav;
