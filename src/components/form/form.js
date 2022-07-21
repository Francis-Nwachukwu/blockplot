import "./form.css";

const NewsletterForm = () => {
  return (
    <form name="newsletter" method="post" className="newsletter-form">
      <input type="hidden" name="form-name" value="newsletter" />
      <input
        type="text"
        name="firstName"
        placeholder="First name"
        className="form-input"
      />
      <input
        type="text"
        name="LastName"
        placeholder="Last name"
        className="form-input"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="form-input"
      />
      <button className="form-btn" type="submit">
        Join
      </button>
    </form>
  );
};
export default NewsletterForm;
