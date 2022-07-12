import "../App.css";
const Auth = () => {
  return (
    <div>
      <section className="section single-page">
        <div className="newsletter">
          <div className="newsletter-content">
            <h1 className="newsletter-header section-title">
              Stay in touch to know when we launch
            </h1>
            <div className="underline"></div>
            <form className="newsletter-form">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="form-input"
              />
              <button className="form-btn">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Auth;
