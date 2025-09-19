import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Portfolio from "./pages/Portfolio";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <Home />
        <About />
        <Skills />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}

export default App;
