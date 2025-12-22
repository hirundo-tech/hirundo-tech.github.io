import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import Team from "../components/home/Team";
import Footer from "../components/layout/Footer";
import RiskFree from "../components/home/RiskFree";
import Header from "../components/layout/Header";

const Home = () => {
  return (
    <div className="text-4xl bg-[#DCECF0] min-h-screen w-dvw">
      <Header />
      <Hero />
      <Services />
      <RiskFree />
      <Team />
      <Footer />
    </div>
  );
};

export default Home;
