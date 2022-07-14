import "../App.css";
import NewsletterForm from "../components/form/form";
import founderImg from "../assets/Founder img.jpg";

const About = () => {
  return (
    <div className="about-page">
      <section className="section single-page">
        <div className="about-bg"></div>
        <div className="section-title">
          <h1>About Us</h1>
          <div className="underline"></div>
        </div>
        <div className="section-center page-info">
          <p>
            We want to make real estate investing affordable and accessible
            globally to people of all social class by tokenizing real estate
            assets. We develop an investment application to reduce the cost of
            entry and time commitment for property ownership.
          </p>
        </div>
      </section>
      <section className="team">
        <div className="section-title blog-title">
          <h1>Meet Our Team</h1>
          <div className="underline"></div>
        </div>
        <div className="section-center team-center">
          <div className="team_card">
            <div className="team_card-side team_card-front">
              <img src={founderImg} alt="Founder" />
              <div className="team_card-info">
                <h2>Nwachukwu Nonso</h2>
                <h4>Founder & CEO</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="newsletter">
        <div className="newsletter-content">
          <h1 className="newsletter-header section-title">Join our waitlist</h1>
          <div className="underline"></div>
          <h2>Get notified when we launch</h2>
          <NewsletterForm />
        </div>
      </section>
    </div>
  );
};
export default About;
