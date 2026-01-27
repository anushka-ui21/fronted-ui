import "./Stats.css";
import learningImg from "../../assets/learning.png";
import studentsImg from "../../assets/students.png";
import liveImg from "../../assets/live.png";

const Stats = () => {
  return (
    <section className="stats">
      {/* 🔵 LEFT DECORATIVE CURVES (3 thin lines effect) */}
      <div className="arc-3"></div>

      {/* 🔵 soft filled inner circle */}
      <div className="bg-circle"></div>

      {/* ---------- HEADING ---------- */}
      <h2 className="stats-heading">
        Why <span className="highlight">learn</span> with our courses?
      </h2>

      <p className="stats-subtitle">
        Join millions of learners and experience top-notch education <br />
        with expert instructors and real-time learning.
      </p>

      {/* ---------- STATS CARDS ---------- */}
      <div className="stats-container">
        {/* Card 1 */}
        <div className="stat-card">
          <img src={learningImg} alt="Top Courses" />
          <h3>100+</h3>

          <p className="stat-title">
            <span className="stat-main">Top</span>
            <span className="stat-sub">Courses</span>
          </p>

          <span className="stat-desc">
            Take courses from the world’s best <br />
            instructors and universities.
          </span>
        </div>

        {/* Card 2 */}
        <div className="stat-card">
          <img src={studentsImg} alt="Happy Learners" />
          <h3>10M+</h3>

          <p className="stat-title">
            <span className="stat-main">Happy</span>
            <span className="stat-sub">Learners</span>
          </p>

          <span className="stat-desc">
            Learners from all around <br />
            the world
          </span>
        </div>

        {/* Card 3 */}
        <div className="stat-card">
          <img src={liveImg} alt="Live Learning" />
          <h3>507M+ Hrs</h3>

          <p className="stat-title">
            <span className="stat-main">Live</span>
            <span className="stat-sub">Learning</span>
          </p>

          <span className="stat-desc">
            Learn your favourite course live <br />
            with world-class instructors <br />
            in real-time.
          </span>
        </div>
      </div>
    </section>
  );
};

export default Stats;
