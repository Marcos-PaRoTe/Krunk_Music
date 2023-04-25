import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/pages/Home/Home";
import Navbar from "../app/views/layout/Navbar/Navbar";
import LeftPanel from "./views/shared/components/LeftPanel/LeftPanel";
import Marketplace from "./views/pages/Marketplace/Marketplace";
import RightPanel from "./views/shared/components/RightPanel/RightPanel";
import Footer from "../app/views/layout/Footer/Footer";

function App() {
  return (
    <Router>
      <Navbar />

      <section style={{display: 'flex'}}>
        <LeftPanel />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/marketplace" element={<Marketplace />} />
        </Routes>

        <RightPanel />
      </section>

      <Footer />
    </Router>
  );
}

export default App;
