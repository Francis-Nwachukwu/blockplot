import { FaCheck } from "react-icons/fa";

import { blogData, aboutData } from "../data";
import NewsletterForm from "../components/form/form";
import "../App.css";

const Home = () => {
  return (
    <div className="home-page">
      <header className="hero">
        <div className="section hero-center">
          <div className="hero-container"></div>
          <div className="section-center">
            <article className="hero-info">
              <div className="underline"></div>
              <h2>Tokenized real estate investment</h2>
              <p>
                Blockplot is a decentralized real estate investment platform
                that lets you co-own real estate assets by investing your
                fiat/tokens into tokenized real estate properties. You earn
                yields from rents and property appreciation.
              </p>
              <button className="hero-btn">
                <a href="#newsletter">Join waitlist</a>
              </button>
            </article>
          </div>
        </div>
      </header>

      <section className="section solution">
        <div className="section-center solution-center">
          <div className="solution-info">
            <div className="solution-title">
              <h1>Our Solution</h1>
            </div>
            <div className="underline"></div>
            <div className="solution-text">
              <p>
                At{" "}
                <span className="logo-navy">
                  Block<span className="logo-black">plot</span>
                </span>
                , we help users invest in tokenized versions of real estate
                assets, creating 3 key benefits:
                <div className="solution-list">
                  <p className="solution-list__item">
                    <FaCheck /> Creating liquidity.
                  </p>
                  <p className="solution-list__item">
                    <FaCheck /> Unlocking the equity in the asset.
                  </p>
                  <p className="solution-list__item">
                    <FaCheck /> Promoting ownership for individuals who can now
                    hold fractions of real estate assets and feel responsible
                    for its development and management through our decentralized
                    governance system.
                  </p>
                </div>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-center about">
        <div className="about-title">
          <h1>Core Features</h1>
        </div>
        <div className="underline"></div>
        <div className="section-center about-center">
          {aboutData.map(({ id, icon, header, paragraph }) => {
            return (
              <article className="about-info" key={id}>
                <div className="about-card">
                  {icon}
                  <h2>{header}</h2>
                  <p>{paragraph}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section blog">
        <div className="section-center">
          <div className="blog-title">
            <h1>Grow a global, digital real estate portfolio.</h1>
            <div className="underline"></div>
            <p>
              Leverage your assets like never before with the power of
              Decentralized Finance on the blockchain.
            </p>
          </div>
          <div className="section-center blog-center">
            {blogData.map(({ id, header, paragraph }) => {
              return (
                <article className="blog-items" key={id}>
                  <div className="blog-card">
                    <h1>{header}</h1>
                    <p>{paragraph}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <section className="connect">
        <div className="image-container"></div>
        <div className="image-banner">
          <div className="section-center">
            <div className="section-title connect-title">
              <h1>Tokenizing Real Estate assets</h1>
              <div className="underline"></div>
              <h3>The future of Real Estate investment is fractional.</h3>
            </div>
            <p>
              Tokenizing real estate has become the focus of the real estate
              market and is likely to continue as Ethereum offers a way to add
              improved levels of liquidity (tokens) to a notoriously illiquid
              industry (real estate).
            </p>
            <p>
              Fractional ownership democratizes access to real estate
              investment, and therefore distributes and minimizes the risks and
              labor involved with owning property. Blockplot makes it easier we
              set up the LLC, co-ownership legal agreement, and business banking
              account for you.
            </p>
          </div>
        </div>
      </section>
      <div className="section-center">
        <section className="newsletter" id="newsletter">
          <div className="newsletter-content">
            <h1 className="newsletter-header">Join our waitlist</h1>
            <div className="underline"></div>
            <p>Get notified when we launch.</p>
            <NewsletterForm />
          </div>
        </section>
      </div>

      <section className="market section-center">
        <div className="market-title">
          <h1>Market Trends</h1>
        </div>
        <div className="underline"></div>
        <div className="market-details">
          <div className="detail-item">
            <h1>2022</h1>
            <p>In 2022, Real Estate in Africa has never been bigger.</p>
          </div>
          <div className="detail-item">
            <h1>$120B+</h1>
            <p>Estimated Africa Real Estate market size.</p>
          </div>
          <div className="detail-item">
            <h1>5-8%</h1>
            <p>Average yearly appreciation.</p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
