import "../App.css";
import NewsletterForm from "../components/form/form";

const Auth = () => {
  return (
    <div className="auth-page">
      <div className="newsletter section-center">
        <div className="newsletter-content">
          <h1 className="newsletter-header section-title">Join our waitlist</h1>
          <div className="underline"></div>
          <p>Get notified when we launch.</p>
          <NewsletterForm />
        </div>
      </div>
    </div>
  );
};
export default Auth;
