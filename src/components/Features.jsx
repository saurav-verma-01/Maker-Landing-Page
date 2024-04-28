import passionLogo from "../assets/illustration-passions.svg";

import financialLogo from "../assets/illustration-financial-freedom.svg";

import lifeStyleLogo from "../assets/illustration-lifestyle.svg";

import workLogo from "../assets/illustration-work-anywhere.svg";
import Feature from "./Feature";

const features = [
  {
    id: 1,
    icon: passionLogo,
    title: "Indulge your passions",
    desc: "Your passions shouldn't be just for the weekend. Earn a living doing what you love.",
  },
  {
    id: 2,
    icon: financialLogo,
    title: "Gain financial freedom",
    desc: "Start making money work for you. There’s nothing quite like earning while you sleep.",
  },
  {
    id: 3,
    icon: lifeStyleLogo,
    title: "Choose your lifestyle",
    desc: "Own your daily schedule. Fancy a lie-in? Go for it! Take charge of your week.",
  },
  {
    id: 4,
    icon: workLogo,
    title: "Work from anywhere",
    desc: "Selling online means not being pinned down. Want to work AND travel? Go for it!",
  },
];

const Features = () => {
  return (
    <section className="features">
      <div className="container">
        {features.map((feature) => (
          <Feature key={feature.id} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default Features;
