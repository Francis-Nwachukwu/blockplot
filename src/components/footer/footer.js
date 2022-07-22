import { social } from "../../data";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-infos">
        <div className="footer-info">
          <h4>ABOUT BLOCKPLOT</h4>
          <ul className="footer-info-list">
            <li className="info-list_item">
              <a href="/about">About Us</a>
            </li>
            <li className="info-list_item">
              <a href="/auth">Join our waitlist</a>
            </li>
            <li className="info-list_item">
              <a href="/learn">Learn more</a>
            </li>
          </ul>
        </div>
        <div className="footer-social-icons">
          <h4>CONNECT WITH US</h4>
          <ul className="social-icons">
            {social.map((link) => {
              const { id, url, icon } = link;
              return (
                <li className="social-icon" key={id}>
                  <a href={url}>{icon}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <hr />
      <p>
        Copyright &copy; <span id="date">2022</span> blockplot.co. All rights
        reserved
      </p>
    </footer>
  );
};
export default Footer;
