import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Pricing from "./components/Pricing";

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </main>
  );
};

export default App;
