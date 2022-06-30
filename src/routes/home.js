import { Link } from "react-router-dom";
import { social } from "../data";
import "../App.css";

const Home = () => {
  return (
    <div>
      <header className="hero">
        <div className="section-center hero-center">
          <article className="hero-info">
            <div className="underline"></div>
            <h1>BLOCKPLOT</h1>
            <h4>Decentralized fractional real estate investment</h4>
            <Link to="/about" className="btn hero-btn">
              About Us
            </Link>
            <ul className="social-icons hero-icons">
              {social.map((link) => {
                const { id, url, icon } = link;
                return (
                  <li key={id}>
                    <a className="social-icon" href={url}>
                      {icon}
                    </a>
                  </li>
                );
              })}
            </ul>
          </article>
        </div>
      </header>

      <section class="section about">
        <div class="section-center about-center">
          <article class="about-info">
            <div class="section-title about-title">
              <h2>Cost of Entry</h2>
              <div class="underline"></div>
            </div>
            <p>
              Get the chance to co-own fractions of real estate properties by
              investing a minimum of 100USDT.
            </p>
          </article>
          <article class="about-info">
            <div class="section-title about-title">
              <h2>Property Appreciation</h2>
              <div class="underline"></div>
            </div>
            <p>
              Earn our asset backed tokens in value as property appreciates
              year-on-year.
            </p>
          </article>
          <article class="about-info">
            <div class="section-title about-title">
              <h2>Rental Income</h2>
              <div class="underline"></div>
            </div>
            <p>
              Earn rental income and withdraw/sell off whenever you want to.
            </p>
          </article>
          <article class="about-info">
            <div class="section-title about-title">
              <h2>Decentralized Governance</h2>
              <div class="underline"></div>
            </div>
            <p>
              Token holders vote on property decisions through our governance
              system. Decisions range from rental increment to repair requests
              and more. The majority, 51%, decide on what should be done &
              relayed to the property management for execution.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
};
export default Home;
