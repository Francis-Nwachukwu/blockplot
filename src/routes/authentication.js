import "../App.css";
import NewsletterForm from "../components/form/form";

const Auth = () => {
  return (
    <div>
      <section className="section single-page">
        <div className="newsletter">
          <div className="newsletter-content">
            <h1 className="newsletter-header section-title">
              Join our waitlist
            </h1>
            <div className="underline"></div>
            <NewsletterForm />
          </div>
        </div>
      </section>
    </div>
  );
};
export default Auth;
