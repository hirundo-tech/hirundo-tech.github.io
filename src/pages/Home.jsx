import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import Team from "../components/home/Team";
import Footer from "../components/layout/Footer";
import RiskFree from "../components/home/RiskFree";

const Home = () => {
  return (
    <div className="text-4xl bg-[#DCECF0] min-h-screen w-full">
      <Hero />
      <Services />
      <RiskFree />
      <Team />
      <Footer />
    </div>
  );
};

export default Home;
