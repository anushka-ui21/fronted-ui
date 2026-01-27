import "./Header.css";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <img src={logo} alt="IFAS Logo" className="logo" />

        <nav className="nav">
          <a href="#">Home</a>
          <a href="#">Courses</a>
          <a href="#">About Us</a>
          <a href="#">FAQ</a>
          <a href="#">Contact</a>
        </nav>

        <button className="signup-btn">Signup</button>
      </div>
    </header>
  );
};

export default Header;
