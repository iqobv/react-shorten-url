import { useState } from "react";
import Hamburger from "hamburger-react";

import HeaderButtons from "../../HeaderButtons/HeaderButtons";

import "./NavMobile.scss";

const NavMobile = ({ links }) => {
  const [isOpen, setOpen] = useState(false);

  const closeMenuOnOverlay = (e) => {
    if (e.target.classList.contains("nav-mobile-container")) {
      setOpen(false);
    }
  };

  return (
    <>
      <Hamburger toggled={isOpen} toggle={setOpen} />
      {isOpen && (
        <div onClick={closeMenuOnOverlay} className="nav-mobile-container">
          <nav className="nav-mobile">
            <ul className="nav-mobile-links">
              {links.map((link, index) => (
                <li key={index} className="nav-mobile-link-item">
                  <a
                    className="nav-mobile-link-item-link"
                    href={`#${link.title.toLowerCase()}`}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
            <HeaderButtons />
          </nav>
        </div>
      )}
    </>
  );
};

export default NavMobile;
