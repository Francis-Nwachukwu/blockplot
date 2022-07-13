import "./form.css";

const NewsletterForm = () => {
  return (
    <form name="newsletter" method="post" className="newsletter-form">
      <input type="hidden" name="form-name" value="newsletter" />
      <input
        type="email"
        name="email"
        placeholder="Your email..."
        className="form-input"
      />
      <button className="form-btn" type="submit">
        Subscribe
      </button>
    </form>
  );
};
export default NewsletterForm;
