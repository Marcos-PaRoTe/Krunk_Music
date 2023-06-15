import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./views/pages/Home/Home";
import Marketplace from "./views/pages/Marketplace/Marketplace";
import NovoProduto from "./views/pages/NovoProduto/NovoProduto";

import Login from "./views/pages/Login/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login to="/login"/>}/>
        <Route exact path="/home" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/produtos" element={<NovoProduto />} />
      </Routes>
    </Router>
  );
}

export default App;

