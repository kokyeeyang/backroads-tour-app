import logo from "../images/logo.svg";
import { socialLinks } from "../data";
import Pagelinks from "./PageLinks";
import SocialLink from "./SocialLink";
const Navbar = (props) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <Pagelinks parentClass="nav-links" itemClass="nav-link"></Pagelinks>

        <ul className="nav-icons">
          {socialLinks.map((link) => {
            return <SocialLink {...link} key={link.id}></SocialLink>;
          })}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
