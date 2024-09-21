import Achievements from "./components/Achievements";
import Calender from "./components/Calender";
import Clients from "./components/Clients";
import Community from "./components/Community";
import Customer from "./components/Customer's";
import Footer from "./components/Footer";
import FooterTop from "./components/FooterTop";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import News from "./components/News";
import Unlock from "./components/Unlock";

function App() {
  return (
    <div className="container max-w-[1600px] m-auto font-Inter">
      <Header />
      <HeroSection />
      <Clients />
      <Community />
      <Unlock />
      <Achievements />
      <Calender />
      <Customer />
      <News />
      <FooterTop />
      <Footer/>
    </div>
  );
}

export default App;
