import "./Newsletter.css";
import newsletterImg from "../../assets/newsletter-bg.png";

const Newsletter = () => {
  return (
    <section className="newsletter-wrapper">
      <div className="newsletter-image-box">
        <img src={newsletterImg} alt="Newsletter" />

        {/* paragraph overlay on image */}
        <p className="newsletter-text">
          Subscribe today to unlock a wealth of knowledge, delivered right to
          your email, and stay ahead of the curve with ease.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
