import { Link } from "react-router-dom";

import { blogData, aboutData } from "../data";
import NewsletterForm from "../components/form/form";
import "../App.css";

const Home = () => {
  return (
    <div>
      <header className="hero">
        <div className="section-center hero-center">
          <div className="hero-container"></div>
          <article className="hero-info">
            <div className="underline"></div>
            <h2>Tokenized real estate investment</h2>
            <p>
              Blockplot is a decentralized real estate investment platform that
              lets you co-own real estate assets by investing your fiat/tokens
              into tokenized real estate properties. You earn yields from rents
              and property appreciation.
            </p>
            <Link to="/about" className="btn hero-btn">
              About Us
            </Link>
          </article>
        </div>
      </header>

      <section className="section about">
        <div className="section-center about-center">
          {aboutData.map(({ id, icon, header, paragraph }) => {
            return (
              <article className="about-info" key={id}>
                <div>
                  <div className="card-side card-front">
                    {icon}
                    <h2>{header}</h2>
                    <p>{paragraph}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section blog">
        <div className="section-title blog-title">
          <h1>Grow a global, digital real estate portfolio.</h1>
          <p>
            Leverage your assets like never before with the power of
            Decentralized Finance on the blockchain.
          </p>
          <div className="underline"></div>
        </div>
        <div className="section-center blog-center">
          {blogData.map(({ id, header, paragraph }) => {
            return (
              <article key={id}>
                <div className="card">
                  <div className="card-side card-front">
                    <h1>{header}</h1>
                    <p>{paragraph}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
      <section className="connect">
        <div className="image-container"></div>
        <div className="image-banner">
          <div className="section-title">
            <h1>Tokenizing Real Estate assets</h1>
            <h2>The future of Real Estate investment is fractional.</h2>
            <div className="underline"></div>
          </div>
          <p>
            Tokenizing real estate has become the focus of the real estate
            market and is likely to continue as Ethereum offers a way to add
            improved levels of liquidity (tokens) to a notoriously illiquid
            industry (real estate).
          </p>
          <p>
            Fractional ownership democratizes access to real estate investment,
            and therefore distributes and minimizes the risks and labor involved
            with owning property. Blockplot makes it easier we set up the LLC,
            co-ownership legal agreement, and business banking account for you.
          </p>
        </div>
      </section>
      <section className="newsletter">
        <div className="newsletter-content">
          <h1 className="newsletter-header section-title">Join our waitlist</h1>
          <div className="underline"></div>
          <NewsletterForm />
        </div>
      </section>
    </div>
  );
};
export default Home;
