import { useDesktop } from "../../../hooks/useDesktop";

import NavDesktop from "./NavDesktop/NavDesktop";
import NavMobile from "./NavMobile/NavMobile";
import Logo from "../../Icons/Logo";

import { LINKS } from "../../../constants/links";

import "./Nav.scss";

const Nav = () => {
  const { isDesktop } = useDesktop();

  return (
    <>
      <a className="logo-link" href="#">
        <Logo />
      </a>
      {isDesktop ? <NavDesktop links={LINKS} /> : <NavMobile links={LINKS} />}
    </>
  );
};

export default Nav;
