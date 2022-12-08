import Navbar from "./components/Navbar/Navbar.jsx";
import Intro from "./components/Intro/Intro.jsx";
import Services from "./components/Services/Services.jsx";
import "./App.css";
import Experience from "./components/Experience/Experience.jsx";
import Works from "./components/Works/Works.jsx";
import Portfolio from "./components/Portfolio/Portfolio.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { useContext } from "react";
import { themeContext } from "./Context";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const darkTheme = {
    background: darkMode ? "black" : "",
    color: darkMode ? "white" : "",
  };

  return (
    <div className="App" style={{ darkTheme }}>
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Portfolio />
      {/* <Testimonial /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
