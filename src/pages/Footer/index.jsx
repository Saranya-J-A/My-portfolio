// components/Footer/index.jsx
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container text-center">

        <h5 className="mb-3">Saranya J A</h5>
        <p className="mb-4">Full Stack Developer</p>

        {/* Social Links */}
        <div className="social-icons">

          <a 
            href="https://github.com/Saranya-J-A" 
            target="_blank" 
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a 
            href="https://www.linkedin.com/in/saranya-j-a-816a19301" 
            target="_blank" 
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a 
            href="mailto:saranyaja1112@gmail.com"
            target="_blank" 
            rel="noreferrer"
          >
            <FaEnvelope />
          </a>

        </div>

        <p className="mt-4 small">
          © 2026 Saranya J A. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;