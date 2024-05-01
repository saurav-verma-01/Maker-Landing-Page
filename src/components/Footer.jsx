import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleEmailChange = (e) => {
    // e.preventDefault();
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsValid(e.target.checkValidity());
    setEmail("");
  };

  return (
    <footer className="footer">
      <div className="bg-footer"></div>
      <div className="container">
        <div className="footer-top">
          <h2>Get notified when we launch</h2>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <input
            placeholder="Email address"
            type="email"
            name="email"
            id="email"
            onChange={handleEmailChange}
            value={email}
            style={{
              border: isValid ? "2px solid #3ee9e5" : "2px solid #ff2965",
            }}
          />
          <button type="submit">Get notified</button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
