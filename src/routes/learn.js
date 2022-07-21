import { FAQ } from "../data";

const LearnPage = () => {
  return (
    <div className="learn-page">
      <div className="section-center">
        <div className="learn-title">
          <h1>Frequently Asked Questions</h1>
          <div className="underline"></div>
        </div>
        <section className="faq">
          <aside className="faq-questions">
            {FAQ.map((item) => {
              return (
                <a
                  key={item.id}
                  className="questions-link"
                  href={`#${item.question}`}
                >
                  {item.question}
                </a>
              );
            })}
          </aside>
          <div className="main-faq">
            <div className="main-faq-details">
              {FAQ.map((item) => {
                return (
                  <div key={item.id} className="faq-item">
                    <h3 id={item.question} className="question-details">
                      {item.question}
                    </h3>
                    <p className="answer-details">{item.answer}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default LearnPage;
