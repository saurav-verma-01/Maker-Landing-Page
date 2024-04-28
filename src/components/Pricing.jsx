import tickIcon from "../assets/icon-check.svg";
import darkIcon from "../assets/icon-check-dark.svg";
import freeIcon from "../assets/icon-free.svg";
import paidIcon from "../assets/icon-paid.svg";

const Pricing = () => {
  return (
    <section className="pricing">
      <div className="container">
        <div className="pricing-top">
          <h2>Our pricing plans</h2>
          <p>
            We only make money when our creators make money. Our plans are
            always affordable, and it’s completely free to get started.
          </p>
        </div>
        <div className="pricing-cards">
          <div className="free-card">
            <img src={freeIcon} alt="free icon" className="icon-card" />
            <h3>Dip your toe</h3>
            <p>
              Just getting started? No problem at all! Our free plan will take
              you a long way.
            </p>
            <h2>Free</h2>
            <ul>
              <li>
                <img src={tickIcon} alt="tick icon" />
                Unlimited products
              </li>
              <li>
                <img src={tickIcon} alt="check icon" />
                Basic analytics
              </li>
              <li>
                <img src={tickIcon} alt="check icon" />
                Limited marketplace exposure
              </li>
              <li>
                <img src={tickIcon} alt="check icon" />
                10% fee per transaction
              </li>
            </ul>
          </div>
          <div className="premium-card">
            <img src={paidIcon} alt="paid icon" className="icon-card" />
            <h3>Dive right in</h3>
            <p>
              Ready for the big time? Our paid plan will help you take your
              business to the next level.
            </p>
            <h2>
              $25.00 <span>/ month</span>
            </h2>

            <ul>
              <li>
                <img src={darkIcon} alt="check icon" />
                Custom domain
              </li>
              <li>
                <img src={darkIcon} alt="check icon" />
                Advanced analytics and reports
              </li>
              <li>
                <img src={darkIcon} alt="check icon" />
                High marketplace visibility
              </li>
              <li>
                <img src={darkIcon} alt="check icon" />
                5% fee per transaction
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
