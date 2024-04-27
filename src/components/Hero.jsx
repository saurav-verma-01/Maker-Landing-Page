import heroMobile from "../assets/illustration-hero-mobile.png";

import scrollIcon from "../assets/icon-scroll.svg";

const Hero = () => {
  return (
    <section className="hero">
      <img src={heroMobile} alt="hero illustrations" className="hero-mobile" />

      <div className="hero-content">
        <div className="content-bg"></div>
        <h1>
          Get paid for the work you <span className="accent">love</span> to do.
        </h1>
        <p>
          The 9-5 grind is so last century. We believe in living life on your
          own terms. Whether you’re looking to escape the rat race or set up a
          side hustle, we’ve got you covered.
        </p>
        <img src={scrollIcon} alt="icon scroll" className="scroll-icon" />
      </div>

      <div className="hero-bg-left"></div>
      <div className="hero-bg-right"></div>
    </section>
  );
};

export default Hero;
