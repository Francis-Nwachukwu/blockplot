import { useState } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

const LearnPage = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);
  const [isOpen8, setIsOpen8] = useState(false);
  const [isOpen9, setIsOpen9] = useState(false);
  const [isOpen10, setIsOpen10] = useState(false);
  const [isOpen11, setIsOpen11] = useState(false);
  const [isOpen12, setIsOpen12] = useState(false);

  const toggle1 = () => {
    setIsOpen1(!isOpen1);
  };
  const toggle2 = () => {
    setIsOpen2(!isOpen2);
  };
  const toggle3 = () => {
    setIsOpen3(!isOpen3);
  };
  const toggle4 = () => {
    setIsOpen4(!isOpen4);
  };
  const toggle5 = () => {
    setIsOpen5(!isOpen5);
  };
  const toggle6 = () => {
    setIsOpen6(!isOpen6);
  };
  const toggle7 = () => {
    setIsOpen7(!isOpen7);
  };
  const toggle8 = () => {
    setIsOpen8(!isOpen8);
  };
  const toggle9 = () => {
    setIsOpen9(!isOpen9);
  };
  const toggle10 = () => {
    setIsOpen10(!isOpen10);
  };
  const toggle11 = () => {
    setIsOpen11(!isOpen11);
  };
  const toggle12 = () => {
    setIsOpen12(!isOpen12);
  };
  return (
    <div className="learn-page">
      <div className="section-center">
        <div className="learn-title">
          <h1>Frequently Asked Questions</h1>
          <div className="underline"></div>
        </div>
        <section className="faq">
          <div className="main-faq">
            <div className="main-faq-details">
              {/* { tried doing this with Array.map, but it didnt work so here I am

                {FAQ.map((item) => {
                return (
                  <div key={item.id} className="faq-item">
                    <div
                      onClick={toggle(item.id)}
                      id={item.id}
                      className="item-header"
                    >
                      <h3 id={item.id} className="question-details">
                        {item.question}
                      </h3>
                      {isOpen === true ? <FaAngleUp /> : <FaAngleDown />}
                    </div>

                    {isOpen === true ? (
                      <p id={item.id} className="answer-details show-answer">
                        {item.answer}
                      </p>
                    ) : null}
                  </div>
                );
              })} } */}
              <div className="faq-item">
                <div onClick={toggle1} className="item-header">
                  <h3 className="question-details">Who are we?</h3>
                  {isOpen1 === true ? <FaAngleUp /> : <FaAngleDown />}
                </div>
                {isOpen1 === true ? (
                  <p className="answer-details">
                    Blockplot is a dedicated team of engineers, designers,
                    developers and business partners in the real estate space
                    with a vision of making real estate ownership available to
                    anyone. At blockplot, we aim to bridge the gaps between real
                    estate and blockchain technology.
                  </p>
                ) : null}
              </div>

              <div className="faq-item">
                <div onClick={toggle2} className="item-header">
                  <h3 className="question-details">What is Blockplot?</h3>
                  {isOpen2 === true ? <FaAngleUp /> : <FaAngleDown />}
                </div>

                {isOpen2 === true ? (
                  <p className="answer-details">
                    Blockplot is a platform that tokenizes ownership of real
                    estate assets. You can become an owner of real estate asset
                    by owning blocks of Properties (tokens) on our platform and
                    receive similar returns as if you owned regular real estate
                    including but not limited to: rental income, appreciation of
                    the asset, and a say in the management of the property.
                  </p>
                ) : null}
              </div>

              <div className="faq-item">
                <div onClick={toggle3} className="item-header">
                  <h3 className="question-details">
                    How does tokenizing real estate work?
                  </h3>
                  {isOpen3 === true ? <FaAngleUp /> : <FaAngleDown />}
                </div>

                {isOpen3 === true ? (
                  <p className="answer-details">
                    Each property is vetted for legitimacy, rental income, and
                    operating management, before construction. Blockplot will
                    act as the facilitator of transferring equity from the
                    property’s owning company to a new LLC. The equities will
                    then be split into the ‘blocks’ (tokens) on the Blockchain.
                    These tokens will solely represent the amount of ownership
                    you have, Which in essence gives you ownership of the real
                    estate asset.
                  </p>
                ) : null}
              </div>

              <div className="faq-item">
                <div onClick={toggle4} className="item-header">
                  <h3 className="question-details">
                    What form of currency can I use to purchase Blockplot
                    tokens?
                  </h3>
                  {isOpen4 === true ? <FaAngleUp /> : <FaAngleDown />}
                </div>

                {isOpen4 === true ? (
                  <p className="answer-details">
                    You can purchase Blockplot tokens with a debit card,
                    USDTether (USDT), BinanceUSD (BUSD), and other stable
                    cryptocurrencies.
                  </p>
                ) : null}
              </div>

              <div className="faq-item">
                <div onClick={toggle5} className="item-header">
                  <h3 className="question-details">
                    How can I cash out my block tokens?
                  </h3>
                  {isOpen5 === true ? <FaAngleUp /> : <FaAngleDown />}
                </div>

                {isOpen5 === true ? (
                  <p className="answer-details">
                    Blockplot will utilize an Automatic Market Maker (AMM) to
                    ensure liquidity is always available on the platform.
                  </p>
                ) : null}
              </div>

              <div className="faq-item">
                <div onClick={toggle6} className="item-header">
                  <h3 className="question-details">
                    How often is rent paid out?
                  </h3>
                  {isOpen6 === true ? <FaAngleUp /> : <FaAngleDown />}
                </div>

                {isOpen6 === true ? (
                  <p className="answer-details">Rent is paid out monthly.</p>
                ) : null}
              </div>

              <div className="faq-item">
                <div onClick={toggle7} className="item-header">
                  <h3 className="question-details">Who can participate?</h3>
                  {isOpen7 === true ? <FaAngleUp /> : <FaAngleDown />}
                </div>

                {isOpen7 === true ? (
                  <p className="answer-details">
                    Anyone can participate globally, Just fill out your basic
                    information and start owning! Ownership of tokens makes you
                    a partner as a retail investor.
                  </p>
                ) : null}
              </div>

              <div className="faq-item">
                <div onClick={toggle8} className="item-header">
                  <h3 className="question-details">
                    What are the KYC requirements?
                  </h3>
                  {isOpen8 === true ? <FaAngleUp /> : <FaAngleDown />}
                </div>

                {isOpen8 === true ? (
                  <p className="answer-details">
                    We ask that you provide us with your full name, a visible
                    picture of your government-issued ID, and the ID number.
                  </p>
                ) : null}
              </div>

              <div className="faq-item">
                <div onClick={toggle9} className="item-header">
                  <h3 className="question-details">
                    What is the maximum number of tokens I can purchase in each
                    property?
                  </h3>
                  {isOpen9 === true ? <FaAngleUp /> : <FaAngleDown />}
                </div>

                {isOpen9 === true ? (
                  <p className="answer-details">
                    For each property, the maximum number of tokens each
                    investor can own is 10%. This limit is in place for
                    Governance reasons to ensure a fair voting system. This can
                    be changed in the future.
                  </p>
                ) : null}
              </div>

              <div className="faq-item">
                <div onClick={toggle10} className="item-header">
                  <h3 className="question-details">
                    Can I invest under an Entity like an LLC?
                  </h3>
                  {isOpen10 === true ? <FaAngleUp /> : <FaAngleDown />}
                </div>

                {isOpen10 === true ? (
                  <p className="answer-details">
                    Not at this time, though we may support this in the future.
                  </p>
                ) : null}
              </div>

              <div className="faq-item">
                <div onClick={toggle11} className="item-header">
                  <h3 className="question-details">
                    How does Blockplot ensure a smooth selling experience during
                    extreme market conditions?
                  </h3>
                  {isOpen11 === true ? <FaAngleUp /> : <FaAngleDown />}
                </div>

                {isOpen11 === true ? (
                  <div>
                    <p className="answer-details">
                      Our tokens are backed by real world assets, i.e the
                      physical properties. Therefore, there would never be an
                      insolvency issue. Furthermore, all the rental income
                      available is already in the bank accounts of their
                      respective properties, so rental payouts will always be
                      solvent and liquid. However, We are using a portion of our
                      operating cash to provide liquidity for users who may need
                      liquidity on short notice.
                    </p>
                    <p>
                      {" "}
                      The tokens are then re-sold to new users on the
                      marketplace, replenishing this liquidity pool. If
                      sell-backs might exceed the normal liquidity pool, a queue
                      system will be implemented. It will be operated on a
                      first-come-first-out basis. As tokens that are purchased
                      back from this queue are re-sold successfully on the
                      marketplace, the replenished funds will be used to
                      purchase more sell-backs from users further down in the
                      queue until the queue ends, or until sell-back requests
                      return to the normal operating baseline.
                    </p>
                  </div>
                ) : null}
              </div>

              <div className="faq-item">
                <div onClick={toggle12} className="item-header">
                  <h3 className="question-details">
                    How can I track the performance of my property?
                  </h3>
                  {isOpen12 === true ? <FaAngleUp /> : <FaAngleDown />}
                </div>

                {isOpen12 === true ? (
                  <p className="answer-details">
                    All owners have their dashboard, called Assets Overview,
                    where you can see how many tokens you hold and their current
                    principal value, which will adjust automatically each
                    quarter starting after the token offering is complete. You
                    will be able to see income added to your account along with
                    records of historical transactions.
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default LearnPage;
