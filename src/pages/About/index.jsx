// pages/About/index.jsx
import { FaUserGraduate, FaCode, FaLaptopCode } from "react-icons/fa";
import "./about.css";

const About = () => {
  return (
    <div className="about container py-5">
      <h2 className="text-center mb-4">About Me</h2>

      <p className="text-center mb-5">
        I am <strong>Saranya J A</strong>, a B.Tech graduate in Information Technology
        with a strong passion for building modern web applications using the MERN stack.
        I enjoy creating responsive, scalable, and user-friendly applications.
      </p>

      <div className="row text-center">

        <div className="col-md-4">
          <FaUserGraduate size={40} className="icon mb-3" />
          <h5>Education</h5>
          <p>B.Tech in IT from Anna University</p>
        </div>

        <div className="col-md-4">
          <FaCode size={40} className="icon mb-3" />
          <h5>Developer</h5>
          <p>Focused on MERN Stack development</p>
        </div>

        <div className="col-md-4">
          <FaLaptopCode size={40} className="icon mb-3" />
          <h5>Goal</h5>
          <p>To build scalable and user-centric web apps</p>
        </div>

      </div>
    </div>
  );
};

export default About;