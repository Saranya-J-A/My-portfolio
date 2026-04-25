import "./hero.css";
import Button from "../../Components/Button";

const Hero = () => {
  return (
    <>
      <div className="hero text-center">
        <div className="hero-section container">
          <h1 className="display-4 fw-bold">Hi, I am SARANYA</h1>

          <p className="lead mt-3">Full Stack Developer</p>

          <div className="button d-flex gap-3 justify-content-center">
            <a
              href="/resume/my%20resume%20(with%20photo).pdf"
              target="_blank"
              rel="noreferrer"
            >
              <Button btname="Download CV" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
