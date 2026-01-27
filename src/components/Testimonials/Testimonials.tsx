import "./Testimonials.css";

import ananya from "../../assets/ananya.png";
import ravi from "../../assets/ravi.png";
import neha from "../../assets/neha.png";

const testimonialsData = [
  {
    name: "Ananya S.",
    course: "GATE Life Sciences Student",
    image: ananya,
    review:
      "IFAS provided a thorough and interactive learning experience. The structured study plans and regular practice tests boosted my confidence and helped me understand complex topics.",
  },
  {
    name: "Ravi K.",
    course: "CSIR NET Life Sciences Student",
    image: ravi,
    review:
      "IFAS made my preparation journey smoother and more effective. The instructors are knowledgeable, supportive, and always available to clear doubts.",
  },
  {
    name: "Neha R.",
    course: "IIT JAM Biotechnology Student",
    image: neha,
    review:
      "The personalized support from IFAS was exceptional. The interactive classes and well-designed mock tests kept me exam-ready throughout.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2 className="testimonials-title">Testimonials</h2>
      <p className="testimonials-subtitle">
        What our students say about us
      </p>

      <div className="testimonials-cards">
        {testimonialsData.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <img src={item.image} alt={item.name} />
            <h4>{item.name}</h4>
            <span>{item.course}</span>
            <p>{item.review}</p>
            <div className="stars">★★★★☆</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
