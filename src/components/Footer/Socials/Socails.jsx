import { SOCIALS } from "./../../../constants/socials";

import "./Socials.scss";

const Socials = () => {
  return (
    <div className="nav-socials">
      <ul className="nav-socials-list">
        {SOCIALS.map((social, index) => (
          <li key={index} className="nav-socials-list-item">
            <a
              href={social.link}
              target="_blank"
              className="nav-socials-list-item-link"
            >
              {social.img}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Socials;
