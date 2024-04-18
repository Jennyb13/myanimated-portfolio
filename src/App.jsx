import Test from "./Test";
import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/NavBar";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";

const App = () => {
  return (
  <div>
    <section id="Homepage">
      <Navbar />
      <Hero />
    </section>
    <section id="Services">
      <Parallax type="services"/>
    </section>
    <section>
      <Services />
    </section>
    <section id="Portfolio">
      <Parallax type="portfolio"/>
      </section>
    <section>
      <Portfolio />
    </section>
    
    <section id="Contac">Contac</section>
    {/*<Test/>
    <Test/>*/}
  </div>
  );
};

export default App;
