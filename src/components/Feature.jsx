const Feature = ({ title, desc, icon }) => {
  return (
    <div className="feature">
      <div className="feature-logo">
        <img src={icon} alt={desc} />
      </div>
      <div className="feature-content">
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Feature;
