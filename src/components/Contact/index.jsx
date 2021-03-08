import "./style.css";

const About = () => {
  return (
    <div className="contact">
      <h1>Contact me!</h1>
      <iframe
        src="https://maps.google.com/maps?q=67%20Hillside%20St%20Boston&t=&z=13&ie=UTF8&iwloc=&output=embed"
        frameBorder="0"
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      ></iframe>

      <h4>Phone</h4>
      <p>+1 857-971-0819</p>

      <h4>Email</h4>
      <p>hosdurga.s@northeastern.edu</p>

      <h4>Address</h4>
      <p>67 Hillside St, Boston, MA, 02120</p>
    </div>
  );
};

export default About;
