import "./Features.css";

import school from "../../assets/school.png";
import book from "../../assets/book.png";
import onlineClass from "../../assets/online-class.png";
import mobileApp from "../../assets/mobile-app.png";
import hand from "../../assets/hand.png";

const Features = () => {
  return (
    <section className="features">
    <h2 className="features-title">
  Why Choose <span className="ifas-highlight">IFAS</span> Online?
</h2>


      <p className="subtitle">12,000+ unique online course list designs</p>

      <div className="features-grid">

        <div className="feature-card">
          <img src={school} alt="Expert Instructors" />
          <h3>Expert Instructors</h3>
          <p>
            Learn from top educators with years of experience in entrance exam coaching.
          </p>
        </div>

        <div className="feature-card">
          <img src={book} alt="Study Material" />
          <h3>Study Material</h3>
          <p>
            Access meticulously curated content that covers all aspects of your syllabus.
          </p>
        </div>

        <div className="feature-card">
          <img src={onlineClass} alt="Live Classes" />
          <h3>Live Classes</h3>
          <p>
            Participate in real-time classes where you can ask doubts and engage with peers.
          </p>
        </div>

        <div className="feature-card">
          <img src={mobileApp} alt="Flexible Learning" />
          <h3>Flexible Learning</h3>
          <p>
            Study at your own pace with recorded sessions and a mobile-friendly platform.
          </p>
        </div>

        <div className="feature-card">
          <img src={hand} alt="Affordable Pricing" />
          <h3>Affordable Pricing</h3>
          <p>
            Get quality education at competitive prices with various subscription plans.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Features;
