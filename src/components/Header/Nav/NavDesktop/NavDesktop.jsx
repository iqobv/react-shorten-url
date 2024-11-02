import HeaderButtons from "../../HeaderButtons/HeaderButtons";

import "./NavDesktop.scss";

const NavDesktop = ({ links }) => {
  return (
    <nav className="header-nav">
      <ul className="nav-list">
        {links.map((link, index) => (
          <li key={index} className="nav-list-item">
            <a
              className="nav-list-item-link"
              href={`#${link.title.toLowerCase()}`}
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
      <HeaderButtons />
    </nav>
  );
};

export default NavDesktop;
