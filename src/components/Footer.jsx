const Footer = () => {
  return (
    <footer className="footer">
      <div className="bg-footer"></div>
      <div className="container">
        <div className="footer-top">
          <h2>Get notified when we launch</h2>
        </div>

        <form>
          <input
            placeholder="Email address"
            type="email"
            name="email"
            id="email"
          />
          <button type="submit">Get notified</button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
