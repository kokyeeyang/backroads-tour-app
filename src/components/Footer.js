import { socialLinks } from "../data";
import PageLinks from "./PageLinks";
import SocialLink from "./SocialLink";
const Footer = (props) => {
  return (
    <footer className="section footer">
      <PageLinks parentClass="footer-links" itemClass="footer-link"></PageLinks>
      <ul className="footer-icons">
        {socialLinks.map((link) => {
          return <SocialLink {...link} key={link.id}></SocialLink>;
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  );
};
Footer.propTypes = {};
export default Footer;
