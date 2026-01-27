import "./PlatformFeatures.css";

import imgMain from "../../assets/img.jpg";
import img1 from "../../assets/image.png";
import img2 from "../../assets/image2.png";
import img3 from "../../assets/image3.png";
import img4 from "../../assets/image4.png";

const PlatformFeatures = () => {
  return (
    <section className="platform">
      <div className="platform-container">
        {/* LEFT SIDE */}
        <div className="platform-left">
          <div className="video-card">
            <div className="video-layout">
              {/* BIG IMAGE */}
              <div className="main-video">
                <img src={imgMain} alt="Main User" />
                <span className="name-tag">Patricia Mendoza</span>
              </div>

              {/* SMALL IMAGES */}
              <div className="side-users">
                <div>
                  <img src={img1} alt="User 1" />
                  <span>Hannah</span>
                </div>
                <div>
                  <img src={img2} alt="User 2" />
                  <span>Adam</span>
                </div>
                <div>
                  <img src={img3} alt="User 3" />
                  <span>Daniel</span>
                </div>
                <div>
                  <img src={img4} alt="User 4" />
                  <span>Emma</span>
                </div>
              </div>
            </div>

            <div className="controls">
              <button className="present">Present</button>
              <button className="call">Call</button>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="platform-right">
          <h2>
            Platform <span>Features</span> That <br />
            Empower Your Learning
          </h2>

          <ul>
            <li>Live learning and interactive tools</li>
            <li>Mobile-friendly access</li>
            <li>On-demand content</li>
            <li>Personalized learning paths</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PlatformFeatures;
