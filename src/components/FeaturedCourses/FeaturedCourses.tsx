import "./FeaturedCourses.css";

import csirImg from "../../assets/examLogo.png";
import ugcImg from "../../assets/examLogo1.png";
import cuetImg from "../../assets/examLogo2.png";
import gatImg from "../../assets/examLogo3.png";
import setImg from "../../assets/examLogo4.jpg";
import iitImg from "../../assets/examLogo5.png";

const courses = [
  { title: "CSIR NET", count: "5 Courses", img: csirImg },
  { title: "UGC NET", count: "16 Courses", img: ugcImg },
  { title: "CUET PG", count: "76 Courses", img: cuetImg },
  { title: "GAT B", count: "22 Courses", img: gatImg },
  { title: "SET", count: "110 Courses", img: setImg },
  { title: "IIT JAM", count: "85 Courses", img: iitImg },
];

const FeaturedCourses = () => {
  return (
    <section className="featured-courses">
      <h2 className="fc-title">
        Featured <span>Courses</span>
      </h2>

      <p className="fc-subtitle">
        Explore Our Range of Courses for In-Depth Learning and <br />
        Exam Success
      </p>

      <div className="fc-cards">
        {courses.map((course, index) => (
          <div className="fc-card" key={index}>
            <div className="fc-icon">
              <img src={course.img} alt={course.title} />
            </div>
            <h3>{course.title}</h3>
            <p>{course.count}</p>
          </div>
        ))}
      </div>

      <button className="fc-btn">View All Courses</button>
    </section>
  );
};

export default FeaturedCourses;
