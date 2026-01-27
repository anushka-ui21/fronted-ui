import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import Stats from "./components/Stats/Stats";
import FeaturedCourses from "./components/FeaturedCourses/FeaturedCourses";
import PlatformFeatures from "./components/PlatformFeatures/PlatformFeatures";
import Testimonials from "./components/Testimonials/Testimonials";
import LatestBlog from "./components/LatestBlog/LatestBlog";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Stats/>
      <FeaturedCourses />
      <PlatformFeatures/>
      <Testimonials />
      <LatestBlog />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
