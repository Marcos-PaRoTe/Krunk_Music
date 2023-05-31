import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./views/layout/Navbar/Navbar";
import Home from "./views/pages/Home/Home";
import LeftPanel from "./views/shared/components/LeftPanel/LeftPanel";
import Marketplace from "./views/pages/Marketplace/Marketplace";
import RightPanel from "./views/shared/components/RightPanel/RightPanel";
import Footer from "../app/views/layout/Footer/Footer";
import NovoProduto from "./views/pages/NovoProduto/NovoProduto";
/* import Login from "./views/pages/Login/Login"; */

function App() {
  return (
    <Router>
      <Navbar />

      <section style={{ display: 'flex', width: '100%' }}>
        <LeftPanel />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="/produtos" element={<NovoProduto />} />
        </Routes>

        <RightPanel />
      </section>

      <Footer />
      
      {/* <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
      </Routes> */}
    </Router>
  );
}

export default App;

