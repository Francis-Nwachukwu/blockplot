import { FaCheck } from "react-icons/fa";
import { Animated } from "react-animated-css";
// import 'animate.css/'

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
            <Animated
              animationIn="slideInUp"
              animationInDelay={200}
              isVisible={true}
              className="hero-info"
            >
              <div className="underline"></div>
              <h2>Tokenized real estate investment</h2>
              <p>
                At Blockplot, we let you own fractions of real estate as
                tokenized assets, verifiable on the blockchain. Earn up to 10%
                yields from rental collection and sell off whenever you want,
                instantly.
              </p>
              <button className="hero-btn">
                <a href="#newsletter">Join waitlist</a>
              </button>
            </Animated>
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
                We help users invest in tokenized versions of real estate
                assets, creating 3 key benefits:
                <div className="solution-list">
                  <p className="solution-list__item">
                    <FaCheck />{" "}
                    <span className="solution-list-bold">
                      {" "}
                      Verifiable Ownership.{" "}
                    </span>{" "}
                    Our digital real estate assets will be verifiable on the
                    blockchain.
                  </p>
                  <p className="solution-list__item">
                    <FaCheck />{" "}
                    <span className="solution-list-bold">
                      {" "}
                      Provide Liquidity.{" "}
                    </span>{" "}
                    We'll Provide liquidity and steady cashflow to a highly
                    illiquid market such as real estate.
                  </p>
                  <p className="solution-list__item">
                    <FaCheck />{" "}
                    <span className="solution-list-bold">
                      {" "}
                      Fractional Ownership.{" "}
                    </span>{" "}
                    By tokenizing real world properties, we'll Unlock equities
                    in real estate assets, making it cheaper to own.
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
              market and is likely to continue as the blockchain offers a way to
              add improved levels of liquidity (tokens) to a notoriously
              illiquid industry (real estate).
            </p>
            <p>
              Fractional ownership democratizes access to real estate
              investment, and therefore distributes and minimizes the risks and
              labor involved with owning property. Blockplot makes it easier as
              we set up the LLC, co-ownership legal agreement, and business
              banking account for you.
            </p>
          </div>
        </div>
      </section>

      <section className="market section-center">
        <div className="market-title">
          <h1>Market Trends</h1>
        </div>
        <div className="underline"></div>
        <div className="market-details">
          <div className="detail-item">
            <h1>$760m</h1>
            <p>
              In 2021, cryptocurrency transactions in Africa was over the $100bn
              mark.
            </p>
          </div>
          <div className="detail-item">
            <h1>$120B+</h1>
            <p>Estimated Africa Real Estate market size.</p>
          </div>
          <div className="detail-item">
            <h1>6-12%</h1>
            <p>Average yearly appreciation.</p>
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
    </div>
  );
};
export default Home;
