import "./contact.css";
import Button from "../../Components/Button";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container py-5">
        <h2 className="text-center mb-4">Contact Me</h2>
        <p className="text-center mb-5">
          Feel free to reach out for any opportunities or queries
        </p>

        <div className="row justify-content-center">
          <div className="col-md-6">
            <form className="contact-form">
              <input
                type="text"
                placeholder="Your Name"
                className="form-control mb-3"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="form-control mb-3"
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                className="form-control mb-3"
              ></textarea>

              <Button btname="Send Message" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
