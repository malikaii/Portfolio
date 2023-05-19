import About from "./components/About";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import Navbar from "./components/navbar";

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <SocialLinks/>
      <About/>
    </div>  
  );
}

export default App;
