import "./Hero.css";
import boy from "../../assets/boy.png";

const Hero = () => {
  return (
    <section className="hero">
      {/* bottom curves */}
      <div className="hero-circles">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="hero-container">
        {/* LEFT CONTENT */}
        <div className="hero-text">
         <h1>
            Achieve Success <br />
            with <span>India’s No.1</span> <br />
            Online Exam <br />
            Institute
         </h1>


          <p>
            Join thousands of successful students who have cracked
            their entrance exams with our expert-led online courses.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">Explore Courses</button>
            <button className="btn-outline">Start Learning for Free</button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-image">
          {/* small paragraph near head */}
          <div className="hero-note">
            <span className="note-line"></span>

            <div className="note-text">
              <strong>Dadasaheb Sondge</strong>
              <p>
                Led by CEO Dadasaheb Sondge, IFAS Publications delivers
                quality educational materials to shape future leaders.
              </p>
              <div className="stars">★★★★★</div>
            </div>
          </div>

          <img src={boy} alt="Student" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
