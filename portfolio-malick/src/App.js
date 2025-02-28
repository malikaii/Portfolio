import { HashRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import Navbar from "./components/navbar";
import ErrorPage from "./components/ErrorPage";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Portfolio />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
