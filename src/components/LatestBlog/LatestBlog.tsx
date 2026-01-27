import "./LatestBlog.css";

import blog1 from "../../assets/certification.jpg";
import blog2 from "../../assets/certification2.jpg";
import blog3 from "../../assets/screen.jpg";

const LatestBlog = () => {
  const blogs = [
    {
      img: blog1,
      date: "Ujjwal Tripathy / 26 December 2024",
      time: "8 Min",
      title:
        "UGC NET Exam Pattern 2024: Paper 1 and 2 Marking Scheme and Key Instructions",
    },
    {
      img: blog2,
      date: "Siddharth Gangwar / 24 December 2024",
      time: "9 Min",
      title:
        "JEST Application Form 2025, Application Fee, Apply Online Link",
    },
    {
      img: blog3,
      date: "Ujjwal Tripathy / 22 December 2024",
      time: "10 Min",
      title:
        "UGC NET 2025: Notification, Application Form, Exam Dates, Eligibility, Pattern & Syllabus",
    },
  ];

  return (
    <section className="latest-blog">
      <h2 className="blog-title">
        Latest <span>Blogs</span>
      </h2>

      <p className="blog-subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br />
        do eiusmod temporididunt ut labore veniam...
      </p>

      <div className="blog-cards">
        {blogs.map((blog, index) => (
          <div className="blog-card" key={index}>
            <img src={blog.img} alt="blog" />

            <div className="blog-content">
              <div className="blog-meta">
                <span>{blog.date}</span>
                <span>{blog.time}</span>
              </div>

              <h3>{blog.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestBlog;
