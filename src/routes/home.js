import { Link } from "react-router-dom";
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
          <article className="about-info">
            <div className="card">
              <div className="card-side card-front">
                <h2>Cost of Entry</h2>
                <p>
                  Get the chance to co-own fractions of real estate properties
                  by investing a minimum of 100USDT.
                </p>
              </div>
            </div>
          </article>
          <article className="about-info">
            <div className="card">
              <div className="card-side card-front">
                <h2>Property Appreciation</h2>
                <p>
                  Earn our asset backed tokens in value as property appreciates
                  year-on-year.
                </p>
              </div>
            </div>
          </article>
          <article className="about-info">
            <div className="card">
              <div className="card-side card-front">
                <h2>Rental Income</h2>
                <p>
                  Earn rental income and withdraw/sell off whenever you want to.
                </p>
              </div>
            </div>
          </article>
          <article className="about-info">
            <div className="card">
              <div className="card-side card-front">
                <h2>Decentralized Governance</h2>
                <p>
                  Token holders vote on property decisions through our
                  governance system. Decisions range from rental increment to
                  repair requests and more. The majority, 51%, decide on what
                  should be done & relayed to the property management for
                  execution.
                </p>
              </div>
            </div>
          </article>
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
          <article>
            <div className="card">
              <div className="card-side card-front">
                <h2>Unique Tokens</h2>
                <p>
                  Ownership of properties is distributed across a finite number
                  of representative tokens. Based on token share, owners collect
                  revenue from rent, and vote on property decisions.
                </p>
              </div>
            </div>
          </article>
          <article>
            <div className="card">
              <div className="card-side card-front">
                <h2>Property management</h2>
                <p>
                  Blockplot Properties have a property management company
                  managing the property on Token owners behalf. The property
                  management company sources tenants, collects rent, and manages
                  repairs, so the diverse group of Token owners do not have to.
                </p>
              </div>
            </div>
          </article>
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
    </div>
  );
};
export default Home;
