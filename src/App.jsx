import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import CustomAi from "./pages/CustomAi";
import Portfolio from "./pages/Portfolio";
import Outsourcing from "./pages/Outsourcing";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/custom-ai" element={<CustomAi />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/outsourcing" element={<Outsourcing />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
