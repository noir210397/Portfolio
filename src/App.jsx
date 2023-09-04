import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Header from "./components/Header";
import HomeContainer from "./components/HomeContainer";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Header />
      <HomeContainer />
      <AboutMe />
      <Services />
      <ContactMe />
      <Portfolio />
    </>
  );
}

export default App;
